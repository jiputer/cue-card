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
    findUser(id: ID, inputUsername: String): User!
    users: [User!]!
  }

 #mutates the data tree
  type Mutation {
    signUp(
      email: String!
      inputUsername: String!
      name: String!
      inputPassword: String!
    ): User!
    signIn(inputUsername: String!, inputPassword: String!): User!
    LogStatus: Boolean
  }


`

