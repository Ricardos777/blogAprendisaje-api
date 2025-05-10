import { Router } from 'express'
import { body } from 'express-validator'
import { addComment } from './comment.controller.js'

export const router = Router()

router.post(
  '/comments/:postId',
  [body('name').notEmpty(), body('content').notEmpty()],
  addComment
)
