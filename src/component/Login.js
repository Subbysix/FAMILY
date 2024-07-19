import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                `http://localhost:8083/api/admin/login?username=${username}&password=${password}`,
                {},
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            
            console.log('Login successful:', response.data);
            
            // Check role and redirect accordingly
            if (response.data.role === 'admin') {
                navigate('/admin-dash'); // Redirect to admin dashboard
            } else {
                navigate('/dash'); // Redirect to regular user dashboard
            }
            
            // Optionally, you can store token or user information in local storage or state
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed! Please check your username and password.');
        }
    };

    return (
        <div className="container">
            <div className="center">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="txt_field">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forget Password?</div>
                    <input name="submit" type="submit" value="Login" />
                </form>
                {/* <div className="signup_link">
                    <Link to='/admin-dash'>Admin</Link>
                    Not a Member? <Link to="/register">Signup</Link>
                </div> */}
            </div>
        </div>
    );
}

export default Login;
