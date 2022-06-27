import typeDefs from './typeDefs/index.js'
import resolvers from './resolvers/index.js'
import pkg from 'apollo-server';
const { ApolloServer, ApolloError, ValidationError, gql } = pkg
import mongoose from 'mongoose'
//import React from "react"
// import {
//     ApolloProvider,
//     ApolloClient,
//     createHttpLink,
//     InMemoryCache
//   } from 'apollo-client';

// const httpLink = createHttpLink({
//   uri: 'http://localhost'
// });

// const client = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache()
//   });

const uri = 'mongodb+srv://cuecard:chickennugget@cluster0.92yoh.mongodb.net/?retryWrites=true&w=majority'
process.title = "myApp";

async function dbconnect(){
  await mongoose.connect(uri)
}
dbconnect()
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

const url = 'http://localhost'
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// ReactDOM.render(
//     <ApolloProvider client={client}>
      
//     </ApolloProvider>,
//     document.getElementById('root')
//   );
