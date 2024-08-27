import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGooglePlusG, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <div className={`login_home ${isActive ? 'active' : ''}`}>
            <div className='container'>
                <div className='form-container sign-up'>
                    <form>
                        <h2>Create Account</h2>
                        <div className='social-icons'>
                            <Link to='/'><FontAwesomeIcon icon={faGooglePlusG} style={{ color: 'black' }} /></Link>
                            <Link to='/'><FontAwesomeIcon icon={faFacebook} style={{ color: 'black' }} /></Link>
                            <Link to='/'><FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} /></Link>
                            <Link to='/'><FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} /></Link>
                        </div>
                        <div className='card_body'>
                            <p>or use email for registration</p>
                            <input type='text' placeholder='Name' /><br />
                            <input type='email' placeholder="Email ID" /><br />
                            <input type='password' placeholder='Enter Password...' /><br />
                            <button>Sign Up</button>
                        </div>
                    </form>
                </div>

                <div className='form-container sign-in'>
                    <form>
                        <h2>Already Have an Account</h2>
                        <div className='social-icons'>
                            <Link to='/'><FontAwesomeIcon icon={faGooglePlusG} style={{ color: 'black' }} /></Link>
                            <Link to='/'><FontAwesomeIcon icon={faFacebook} style={{ color: 'black' }} /></Link>
                            <Link to='/'><FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} /></Link>
                            <Link to='/'><FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} /></Link>
                        </div>
                        <div className='card_body'>
                            <p>or use your email account</p>
                            <input type='email' placeholder="Email ID" />
                            <input type='password' placeholder='Enter Password...' />
                            <Link to='/'><p className='forget_password'>Forgot Your Password?</p></Link>
                            <button>Sign In</button>
                        </div>
                    </form>
                </div>

                <div className='toggle-container'>
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>
                            <h1>Hello, Friend!</h1>
                            <p>Register your personal details to start the journey</p>
                            <button className='hidden' onClick={handleLoginClick}>Sign In</button>
                        </div>
                        <div className='toggle-panel toggle-right'>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className='hidden' onClick={handleRegisterClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
