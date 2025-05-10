// index.js
import 'dotenv/config'
import { connectDB } from './configs/mongo.js'
import { createServer } from './configs/server.js'
import { seedPostsIfEmpty } from './src/post/post.seed.js'

const PORT = process.env.PORT || 3000

const start = async () => {
  await connectDB()
  await seedPostsIfEmpty()

  const app = createServer()
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

start()
