import { Post } from '../post/post.model.js'

export const postExistsById = async (id = '') => {
  const exists = await Post.findById(id)
  if (!exists) throw new Error(`Post with id ${id} does not exist`)
}
