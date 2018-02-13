import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Author {
    age: String,
    name: String,
    books: [String]
  }

  type Query {
    authors: [Author]
    author(_id: String): Author
  }

  type Mutation {
    addAuthor(name: String, age: Int, books: [String]): Author
    deleteAuthor(_id: String!): Author
    updateAuthor(_id: String!, name: String!): Author
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
