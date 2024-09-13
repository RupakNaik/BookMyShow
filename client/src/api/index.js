import axios from 'axios';

// create a axios instance
export const axiosInstance = axios.create({
    headers:{
        "Content-Type":"application/json"
    }
});