import { gql } from 'graphql-tag'

export default gql`
  type Query {
    findSet(
        author: String!
        set: String! ): Set!
    
    
  }
  type Mutation{
    createSet(
        author: String!
        name: String!
        ): Set!

  }
  type Set {
    id: ID!
    author: String!
    cards: [Card]!
    
  }
`
