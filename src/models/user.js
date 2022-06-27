import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const { hash, compare} = bcrypt
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    email: String
});

// userSchema.pre('save', async function(){
//     if(this.isModified('password')){
//         this.password = await User.hash(this.password)
//     }
// })


//userSchema.statics.hash = (password) => hash(password, 10)

userSchema.method('matchesPassword', async function(password){
  return compare(password, this.password)
})


const User = mongoose.model('User', userSchema);
export default User;