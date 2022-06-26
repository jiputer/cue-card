import gql from 'graphql-tag'

export default gql`
    
  type Card {
    id: String
    author: String
    fronttxt: String
    backtxt: String
  }

  extend type Query {
    card: Card!
    findCardByID: Card!
  }
  extend type Mutation{
    createCard(username: String!): Card!
    editCard(text: String!, CardID: String!): Card!
    deleteCard(CardID:String!): Card! 
    # editFrontText(cardID: ID!, text: String): Card!
    # editBackText(cardID: ID!, text: String): Card!
    # addImgFront(cardID: ID!, imgURL: String!, position: Int!, position: Int!): Card!
    # addImgBack(cardID: ID!, imgURL: String!, positionX: Int!, positionY: Int!): Card!
    # removeImgFront(cardID: ID!): Card!
    # removeImgBack(cardID: ID!): Card!
    # moveImgFront(cardID: ID!, positionX: Int!, positionY: Int!): Card!
    # moveImgBack(cardID: ID!, positionX: Int!, positionY: Int!): Card!
  }

`
