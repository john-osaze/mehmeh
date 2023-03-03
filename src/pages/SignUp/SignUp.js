import { useState } from 'react'

import './SignUp.css';

const SignUp = () => {
    const [select, setSelect] = useState('login');
  return (
    <section className="SignUp">
        <section>
            <div className="left">
                <img src="https://cdn1.iconfinder.com/data/icons/emoji-122/64/laughing-smile-face-happy-fun-emoji-emoticon-funny_1-64.png" alt="logo"/>
                <p>MehMeh</p>
            </div>
            <div className="right">
                <div className="options">
                    <p className={select === 'login' ? 'Selected' : ''} onClick={() =>setSelect('login')}>Login</p>
                    <p className={select === 'signup' ? 'Selected' : ''} onClick={() =>setSelect('signup')}>Sign Up</p>
                </div>
                {select === 'login' ? (
                    <form>
                    <div className="input-field">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <label> Password</label>
                        <input type="password" />
                    </div>
                    <div className="actions">
                        <div className="remember">
                            <input type="checkbox"/>
                            <label>Remember me</label>
                        </div>
                        <p>Forgot password</p>
                    </div>
                    <button>Submit</button>
                </form>
                ) : (
                    <form>
                    <div className="input-field">
                    <div className="input-field">
                        <label>Full Name</label>
                        <input type="text" />
                    </div>
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <label> Password</label>
                        <input type="password" />
                    </div>
                    <div className="input-field">
                        <label>Confirm Password</label>
                        <input type="password" />
                    </div>
                    <button>Submit</button>
                </form>
                )}
            </div>
        </section>
    </section>
  )
}

export default SignUp