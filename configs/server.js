import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import { router as postRoutes } from '../src/post/post.routes.js'
import { router as commentRoutes } from '../src/comment/comment.routes.js'
import { errorHandler } from '../src/middlewares/handle-errors.js'
import { swaggerServe, swaggerSetup } from './swagger.js'
import { errorHandler } from '../src/middlewares/handle-errors.js'

export const createServer = () => {
  const app = express()

  
  app.use(helmet())
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }))
  app.use('/posts', postRoutes)
  app.use('/', commentRoutes)
  app.use('/api/docs', swaggerServe, swaggerSetup)
  app.use(errorHandler)

  return app
}
