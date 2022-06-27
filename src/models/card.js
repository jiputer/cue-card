import mongoose from "mongoose"

const { Schema } = mongoose;

const cardSchema = new Schema(
    {   
        id: String,
        author_user: String,
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        fronttxt: String,
        backtxt: String
    }
);


cardSchema.methods.generateID = async function(){
    
}
const Card = mongoose.model('Card', cardSchema);
export default Card;