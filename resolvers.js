// import mongoose from 'mongoose'
import Author from './models/author'

const resolvers = {
  Query: {
    authors: () => {
      return Author.find({})
    },
    author: (root, { _id }) => {
      return Author.findOne({_id})
    }
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      const author = new Author({age, name, books}).save()
      return author
    },
    deleteAuthor: (root, { _id }) => {
      return Author.remove({_id})
    },
    updateAuthor: (root, { _id, name }) => {
      return Author.findOneAndUpdate({_id}, {name})
    }
  }
}

export default resolvers
