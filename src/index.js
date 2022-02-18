import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './resources/index.css'

const API_URL = 'https://graphql.anilist.co'

const apolloClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
