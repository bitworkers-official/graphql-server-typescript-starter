# Client

> Example of how to use the graphql api

```ts
// index.ts
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import 'cross-fetch/polyfill' // required polyfill for fetch

// configure the apollo client
const client = new ApolloClient({
  uri: 'https://graphql-typescript-starter.herokuapp.com',
})

async function hello() {
  // send a request to the server
  const { data } = await client.query({
    // this is our query
    query: gql`
      query hello {
        hello
      }
    `,
  })
  console.log(data)
}

hello()
```

## ESLint

When you have updated the schema of the server, you also need to update the schema of the client (for ESLint to work properly).

```bash
npm run update-schema
```

This updates schema.graphql in the client folder and you can continue to enjoy ESLint catching your errors 😄
