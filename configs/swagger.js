// configs/swagger.js
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog de Aprendizaje API',
      version: '1.0.0'
    }
  },
  apis: ['./src/**/*.routes.js']
}
const swaggerSpec = swaggerJsDoc(options)

export const swaggerServe = swaggerUi.serve
export const swaggerSetup = swaggerUi.setup(swaggerSpec)
