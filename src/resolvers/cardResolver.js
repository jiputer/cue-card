import models from "../models/index.js"

import mongoose from "mongoose"

const {User, Card} = models

// we require proper authnetication to create cards
// the user must be logged in
const resolvers = {

  Query: {
    me: async(root, args, req, info) => {
    return User.findById(req.session.userId, fields(info)).exec()
  },
    findCardByID: async(args={CardID: String}) => {
      const card = await Card.find({id: args.CardID})
      return card
    }
  },

  Mutation: {
    createCard: async(args={username: String})=>{
      // add card to user profile
      const user = await User.find({username: args.username}).exec();
      const card =await Card.create({author: user})
      return card

    },
    editCard: async(args= {text: String, CardID: String})=>{

      const card =await Card.update({_id: args.CardID, fronttxt: args.text})
      return card

    },
    deleteCard: async(args= {CardID: String}) => {
      const card = await Card.deleteOne({_id: args.CardID})
      return card
    }
  }

}
export default resolvers;