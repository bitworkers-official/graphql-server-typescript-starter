import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import 'cross-fetch/polyfill' // required polyfill for fetch

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

async function greet() {
  const { data } = await client.query({
    query: gql`
      query hello {
        hello
      }
    `,
  })
  console.log(data)
}

greet()
