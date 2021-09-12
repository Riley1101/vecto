import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'

let client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById("root"))

