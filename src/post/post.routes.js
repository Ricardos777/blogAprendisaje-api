import { Router } from 'express'
import { body } from 'express-validator'
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
} from './post.controller.js'

export const router = Router()

router.get('/', getPosts)
router.get('/:id', getPostById)

router.post(
  '/',
  [
    body('title').notEmpty(),
    body('content').notEmpty(),
    body('course').isIn(['taller', 'practicas', 'tecnologia'])
  ],
  createPost
)

router.put('/:id', updatePost)
router.delete('/:id', deletePost)
