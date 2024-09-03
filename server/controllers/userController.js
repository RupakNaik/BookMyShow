const UserModel = require('../models/userModel');

// handler to register user
const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        // First check user exist or not
        const userExist = await UserModel.findOne({email:email});
        if(userExist){
            return res.status(400).json({message:"User already exist"});
        }

        // If user not exist then create new user
        const user = new UserModel({name,email,password});
        await user.save();
        res.status(201).json({message:"User created successfully"});

    }catch(err){
        console.error(err);
        res.status(400).json({message:"Error while registering user", err:err});
    }
}

// Handler for user login
const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        // First check user exist or not
        const userExist = await UserModel.findOne({email:email});
        if(!userExist){
            return res.statu(400).json({message:"Invalid E-mail or password!"});
        }

        // for now just do db plain text validation but this is not a correct way
        // we should use bcrypt to compare password in future
        if(password!==userExist.password){
            return res.status(400).json({message:"Invalid E-mail or Password!"});
        }

        // If call good rend success
        return res.status(200).json({message:"User logged in successfully"});
    }catch(err){
        console.error(err);
        return res.status(400).json({message:"Error while user login!"});
    }
}
module.exports = {registerUser, loginUser};