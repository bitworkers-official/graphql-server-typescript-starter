import { ApolloEngine } from 'apollo-engine'
import { GraphQLServer } from 'graphql-yoga'
import { data } from './data'
import { resolvers } from './resolvers'

const port = process.env.PORT || 4000

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { data }
} as any)

if (process.env.APOLLO_ENGINE_KEY) {
  const engine = new ApolloEngine({
    apiKey: process.env.APOLLO_ENGINE_KEY
  })

  const httpServer = server.createHttpServer({
    tracing: true,
    cacheControl: true
  })

  engine.listen(
    {
      port,
      httpServer,
      graphqlPaths: ['/']
    },
    () =>
      console.log(
        `Server with Apollo Engine is running on http://localhost:${port}`
      )
  )
} else {
  server.start(
    {
      port
    },
    () => console.log(`👉  http://localhost:4000`)
  )
}
