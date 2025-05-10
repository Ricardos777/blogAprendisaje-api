import { Comment } from './comment.model.js'
import { Post } from '../post/post.model.js'
import { validationResult } from 'express-validator'

export const addComment = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() })

    const { name, content } = req.body
    const { postId } = req.params

    const post = await Post.findById(postId)
    if (!post) return res.status(404).json({ success: false, message: 'Post not found.' })

    const comment = await Comment.create({ post: postId, name, content })
    res.status(201).json({ success: true, data: comment })
  } catch (err) {
    next(err)
  }
}
