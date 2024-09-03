// 1st we created user model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
        required: true
    }
});

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;

// now define a routes in routes folder