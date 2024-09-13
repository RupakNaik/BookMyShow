const UserModel = require('../models/userModel');

// handler to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if the user already exists
        const userExist = await UserModel.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // Create a new user if not exists
        const user = new UserModel({ name, email, password });
        await user.save();
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user, // Optionally, return user data (without password)
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message, // Log the error message, avoid sending stack trace in production
        });
    }
}


// Handler for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validate inputs
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide both email and password",
            });
        }

        // Check user exist or not
        const userExist = await UserModel.findOne({ email: email });
        if (!userExist) {
            return res.statu(400).json({
                success: false,
                message: "Invalid E-mail or password!",
            });
        }

        // for now just do db plain text validation but this is not a correct way
        // we should use bcrypt to compare password in future
        if (password !== userExist.password) {
            return res.status(400).json({
                success: false,
                message: "Invalid E-mail or Password!"
            });
        }

        // If call good rend success
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: userExist,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: "Error while user login!",
            error: error.message
        });
    }
}
module.exports = { registerUser, loginUser };