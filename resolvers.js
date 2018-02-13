const authors = [
  {
    id: 2,
    name: 'Jesus',
    age: 33,
    books: [
      'Bible',
      'Devil'
    ]
  },
  {
    id: 666,
    name: 'Satan',
    age: 666,
    books: [
      'Dark Bible',
      'Everything Else'
    ]
  },
  {
    id: 9,
    name: 'Goethe',
    age: 80,
    books: [
      'Werter',
      'Faust'
    ]
  }
]

const resolvers = {
  Query: {
    authors: () => {
      return authors
    },
    author: (root, { id }) => {
      return authors.find(author => author.id === id)
    }
  }
}

export default resolvers
