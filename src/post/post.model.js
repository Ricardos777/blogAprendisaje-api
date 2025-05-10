import mongoose from 'mongoose'

export const COURSES = ['taller', 'practicas', 'tecnologia']

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    course: { type: String, enum: COURSES, required: true }
  },
  { timestamps: true }
)

export const Post = mongoose.model('Post', PostSchema)
