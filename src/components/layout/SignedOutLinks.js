import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
          <ul className="right">
              <li><NavLink to='/SignUp'>Signed up</NavLink></li>
              <li><NavLink to='/SignIn'>Log in</NavLink></li>
          </ul>
        </div>
    );
}

export default SignedOutLinks;
