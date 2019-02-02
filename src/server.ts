import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'

const port = process.env.PORT || 4000

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any)

server.start({ port }, () => console.log(`👉  http://localhost:4000`))
