import React from  'react';

const Register = ({ onRouteChange }) => {
    return (
        <article className="br3 ba2 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 f3 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba1 bg-transparent hover-bg-blue hover-white w-100" 
                            type="text" name="name"  id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 f3 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba1 bg-transparent hover-bg-blue hover-white w-100"
                            type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 f3 lh-copy f6" htmlFor="username">Username</label>
                            <input className="pa2 input-reset ba1 bg-transparent hover-bg-blue hover-white w-100" type="text" name="username"  id="username" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 f3 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba1 bg-transparent hover-bg-blue hover-white w-100" 
                            type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                    <input 
                    onClick={() => onRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" value="Sign up" />
                    </div>
                    <div className="lh-copy mt3">
                    <p>Have an account?</p>
                    <p onClick={() => onRouteChange('signin')} href="#0" className="f6 link dim black db pointer">Sign in</p>
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Register;