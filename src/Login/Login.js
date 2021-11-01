import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div style={{ minHeight: '86vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='login'>
                <h2>Please Login</h2>
                <Button onClick={handleGoogleLogIn} className="btn-primary"><i class="fab fa-google"></i></Button>
            </div>
        </div>
    );
};

export default Login;