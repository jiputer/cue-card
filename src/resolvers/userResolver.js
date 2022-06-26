import models from '../models/index.js';
//import bcrypt from 'bcrypt';

const {User} = models

const resolvers = {
    
    Query: {
        me: async(
            root,
            args,
            req,
            info
          ) => {
            return User.findById(req.session.userId, fields(info)).exec()
          },
        findUser: async(args={id: String, username: String})=>{

            return await User.findOne({username: args.username})
        }
    },
    Mutation: {
        signUp: async( args = {inputUsername: String, inputPassword: String, email: String, name:String })=>{
            //we get username password and email from the args
            const userExist = await User.findOne({username: args.inputUsername.toString});
            if (userExist) throw new Error('User exists')
               // bcrypt.hash(inputPassword, 10, function(err, hash) {
               // });
            await User.create({name: args.name.toString, email: args.email.toString, username: args.inputUsername.toString, password: args.inputPassword.toString})
            const user = User.findOne({name: args.name.toString, email: args.email.toString, username: args.inputUsername.toString, password: args.inputPassword.toString})

            return user
    
        },
        signIn: async (args= {email: String, inputPassword: String})=> {
            const findUser = await User.find({email: args.email.toString, password: args.inputPassword.toString});
            return User
            
        }

    }
}

export default resolvers;