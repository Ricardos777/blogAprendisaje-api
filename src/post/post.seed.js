import { Post, COURSES } from './post.model.js'

const dummyTexts = [
  'Introducción al stack MERN.',
  'Buenas prácticas de Express.',
  'Control de versiones con Git.',
  'Conceptos de MongoDB y Mongoose.',
  'Patrones de diseño en Node.',
  'Middleware y validación.',
  'Deploy en Render.',
  'REST vs GraphQL.',
  'Autenticación y JWT.',
  'Hooks avanzados en React.',
  'Optimización de consultas Mongo.',
  'Testing con Jest.',
  'Documentar APIs con Swagger.',
  'Seguridad HTTP con Helmet.',
  'Rate limiting efectivo.'
]

export const seedPostsIfEmpty = async () => {
  const count = await Post.countDocuments()
  if (count > 0) return

  const posts = dummyTexts.map((text, i) => ({
    title: `Publicación #${i + 1}`,
    content: text,
    course: COURSES[i % COURSES.length]
  }))

  await Post.insertMany(posts)
  console.log('Seeded 15 posts')
}
