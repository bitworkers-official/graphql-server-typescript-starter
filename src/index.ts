import { GraphQLServer } from 'graphql-yoga';
import { data } from './data';
import { resolvers } from './resolvers';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { data }
} as any);

server.start(() => console.log(`👉  http://localhost:4000`));
