import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    name: { type: String, required: true },
    content: { type: String, required: true }
  },
  { timestamps: true }
)

export const Comment = mongoose.model('Comment', CommentSchema)
