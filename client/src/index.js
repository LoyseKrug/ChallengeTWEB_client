import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


const httpLink = createHttpLink({
  uri:'https://challengetwebloyse.herokuapp.com/movies',
  //uri: 'http://localhost:5000/movies',
  headers: {
    authorization: `a1ff0c4972925f45dd8ad1f896b24237`,
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
document.getElementById('root'));

serviceWorker.unregister();
