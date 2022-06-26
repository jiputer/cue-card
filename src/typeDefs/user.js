import gql from 'graphql-tag'

export default gql`

type User {
    id: ID!
    email: String!
    username: String!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

   type Query {
    me: User!
    findUser(id: ID, username: String): User!
    users: [User!]!
  }

 #mutates the data tree
  type Mutation {
    signUp(
      email: String!
      username: String!
      name: String!
      password: String!
    ): User!
    signIn(email: String!, password: String!): User!
    LogStatus: Boolean
  }


`

