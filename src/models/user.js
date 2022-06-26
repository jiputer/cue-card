import mongoose from 'mongoose'

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    email: String
});

const User = mongoose.model('User', userSchema);

export default User;