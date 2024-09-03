import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
            <main className='App-header'>
                <h1>Register to BookMyShow</h1>
                <section className='mw-500 text-center px-3'>
                    <Form layout="vertical" className="login-form">
                        {/* user name input field */}
                        <Form.Item
                            label="Username"
                            name="username"
                            className='d-block'
                        >
                            <Input placeholder="Enter your username" />
                        </Form.Item>
                        {/* email input field */}
                        <Form.Item
                            label="Email"
                            name="email"
                            htmlFor="email"
                            rules={[
                                { required: true, message: "email is mandatory" },
                                { type: 'email', message: "please enter valid email" }
                            ]}
                        >
                            <Input id='email' type='email' placeholder="Enter your email" />
                        </Form.Item>
                        {/* password input field */}
                        <Form.Item
                            label="Password"
                            name='password'
                            htmlFor='password'
                            className='d-block'
                            rules={[{ required: true, message: "password is mandatory field" }]}
                        >
                            <Input id='password' type='password' placeholder="Enter your password" />
                        </Form.Item>
                        {/* register button */}
                        <Form.Item className='d-block'>
                            <Button type="default" htmlType="submit" block className="login-form-button">Register</Button>
                        </Form.Item>
                    </Form>

                    <div>
                        <p>Already have an Account? <Link to="/login">Login here</Link></p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Register