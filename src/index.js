import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  HttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  }),
})

/* client.query({ query }).then((res) => {
  console.log(res.data)
}) */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
