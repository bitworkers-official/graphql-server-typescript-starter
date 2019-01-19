import { GraphQLServer } from 'graphql-yoga'
import { data } from './data'
import { resolvers } from './resolvers'

const port = process.env.PORT || 4000

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { data }
} as any)

server.start(
  {
    port
  },
  () => console.log(`👉  http://localhost:4000`)
)
