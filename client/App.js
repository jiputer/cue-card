import React from "react"
import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache
  } from '@apollo/client';

// const httpLink = createHttpLink({
//   uri: 'http://localhost'
// });

// const client = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache()
//   });


//   // 4
// ReactDOM.render(
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>,
//     document.getElementById('root')
//   );