const {axiosInstance} = require('./index')

// define a function to register a user
// we will get value from our register form. Import this function in Register Page
export const RegisterUser = async(value)=>{
    try{
        //capture response using axiosInstance
        const response = await axiosInstance.post('/api/users/register',value);
        return response.data;
    }catch(err){
        console.log(err.message);
    }
}

// define a function to register a user
export const LoginUser = async(value)=>{
    try{
        //capture response using axiosInstance
        const response = await axiosInstance.post('/api/users/login',value);
        return response.data;
    }catch(error){
        console.log(error.message);
    }
}