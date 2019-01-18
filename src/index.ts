import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'
import { data } from './data'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { data },
} as any)

server.start(() => console.log(`👉  http://localhost:4000`))
