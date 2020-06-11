import React from "react";
import Mytextfields from "../../Components/text_fields/textfields";
import Mybutton from "../../Components/button/button";
import Mycheckbox from "../../Components/checkbox/checkbox";


const Signupform = () => {

    return(
        <div className='container'>
        <h1>SIGN UP</h1>
        <h3>Fill out this form to start your free trial!</h3>
        <div className='section first'>
        <Mytextfields id="standard-basic" label="First Name" />
        <Mytextfields id="standard-basic" label="Second Name" />
        </div>

        <div className='section Second'>
        <Mytextfields id="standard-basic" label="Email" type="email" />
        <Mytextfields id="standard-basic" label="Phone" />
        </div>

        <div className='section Third'>
        <Mytextfields
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Mytextfields
          id="standard-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
            <div className="mycheckbox">
                <div> <Mycheckbox /> I accept the Terms of Use & Privacy Policy</div>
                <div> <Mycheckbox /> Subscribe to our newsletter</div>
            </div>
        <Mybutton variant="contained" color="primary"/>
        <h6 className="loginhere">Already have an account? Login here</h6>
        </div>
    )
}

export default Signupform;