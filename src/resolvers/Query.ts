import { QueryResolvers } from '../generated/graphqlgen'

export const Query: QueryResolvers.Type = {
  hello(parent, { name }, ctx, info) {
    return `${name || 'world'}`
  },
  isGraphQLAwesome: (parent, args, ctx) => {
    return true
  },
}
