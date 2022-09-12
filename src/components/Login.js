import React from 'react'

export default function Login() {
    return(
        <div className='login'>
            <input type="text" name="text" value="" placeholder="Email address or phone number" /><br/>
            <input type="password" name="text" value="" placeholder="Password" /><br/>
            <button type="submit">Log In</button>
            <p><a className="a-link"href="_blank">Forget password?</a></p>
            <hr />
            <button className="create" type="submit">Create New Account</button>
        </div>
    )
};
