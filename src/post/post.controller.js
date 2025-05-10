import { Post } from './post.model.js'
import { validationResult } from 'express-validator'

export const createPost = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() })

    const post = await Post.create(req.body)
    res.status(201).json({ success: true, data: post })
  } catch (err) {
    next(err)
  }
}

export const getPosts = async (req, res, next) => {
  try {
    const { course, page = 1, limit = 10 } = req.query
    const query = course ? { course } : {}
    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
    res.json({ success: true, data: posts })
  } catch (err) {
    next(err)
  }
}

export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('comments')
    if (!post) return res.status(404).json({ success: false, message: 'Post not found.' })
    res.json({ success: true, data: post })
  } catch (err) {
    next(err)
  }
}

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!post) return res.status(404).json({ success: false, message: 'Post not found.' })
    res.json({ success: true, data: post })
  } catch (err) {
    next(err)
  }
}

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
    if (!post) return res.status(404).json({ success: false, message: 'Post not found.' })
    res.json({ success: true, message: 'Post deleted.' })
  } catch (err) {
    next(err)
  }
}
