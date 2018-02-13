import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: String,
  age: Number,
  books: [String]
})

const model = mongoose.model('author', authorSchema)

export default model
