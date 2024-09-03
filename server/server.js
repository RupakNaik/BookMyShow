const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config(); // loads the environment variables into process.env
// process is a global variable

//require routes
const userRouter = require('./routes/userRoutes');

const connectDB = require('./config/db');
connectDB();

/**
 * Routes
 */
app.use('/api/users',userRouter);

app.listen(8082, ()=>{
    console.log('Server is up & running on port 8082');
})