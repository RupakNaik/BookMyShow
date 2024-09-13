import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../../api/users';

function Login() {
    // define a navigate variable using navigate hok
    const navigate = useNavigate()
    // form onFinish handler
    const onFinish = async(values) => {
        console.log("success",values);
        try{
            const response = await LoginUser(values);
            if (response.success) {
                message.success(response.message);
                navigate('/');
            }else{
                message.error(response.message);
            }
        }catch(error){
            console.log(error);
            message.error(response.message);
        }
    }
    return (
        <>
            <main className="App-header">
                <h1>Login to BookMyShow</h1>
                <section className='mw-500 text-center px-3'>
                    <Form layout="vertical" className="login-form" onFinish={onFinish}>
                        {/* form item for email input */}
                        <Form.Item
                            label="Email"
                            name="email"
                            htmlFor='email'
                            className='d-block'
                            rules={[
                                { required: true, message: "email is mandatory" },
                                { type: 'email', message: "please enter valid email" }
                            ]}
                        >
                            <Input id='email' type="email" placeholder="Enter your email" />
                        </Form.Item>
                        {/* form item for password input */}
                        <Form.Item
                            label="Password"
                            name="password"
                            htmlFor='password'
                            className='d-block'
                            rules={[{ required: true, message: "password is mandatory" }]}
                        >
                            <Input id='password' type="password" placeholder="Enter your password" />
                        </Form.Item>
                        {/* form item for login button */}
                        <Form.Item className='d-block'>
                            <Button type="primary" htmlType="submit" block className="login-form-button">Login</Button>
                        </Form.Item>
                    </Form>

                    <div>
                        <p>New user? <Link to="/register">Register here</Link></p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login