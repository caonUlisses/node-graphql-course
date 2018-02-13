import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schema'

const app = express()

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

mongoose.connect('mongodb://localhost:27017/graphqlTutorial')

const connection = mongoose.connection

connection.once('open', () => {
  console.log('connected to mongo')
})

app.listen(4000, () => {
  console.log('Alive')
})
