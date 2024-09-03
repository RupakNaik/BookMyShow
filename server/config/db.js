const mongoose = require('mongoose');
const dbURL = process.env.DB_URL;
console.log(dbURL);

const connectDB = async ()=>{
    try {
        await mongoose.connect(dbURL);
        console.log('Connected to Database');
        
    }catch(err){
        console.error(err);
    }
}

module.exports = connectDB;