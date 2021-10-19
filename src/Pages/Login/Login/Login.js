import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signInUningGoogle}  = useAuth({});
    return (
        <div className="pt-5">
            <h2>Please Login</h2>
            <button onClick={signInUningGoogle} className="btn btn-warning"> Google Sign In </button>
            
        </div>
    );
};

export default Login;