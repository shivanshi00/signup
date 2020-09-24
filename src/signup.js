
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
let eye = <FontAwesomeIcon icon={faEye} />;

const SignUp = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
        passwordShown
            ? (eye = <FontAwesomeIcon icon={faEyeSlash} />)
            : (eye = <FontAwesomeIcon icon={faEye} />);
    };

    const responseFacebook = (response) => {
        console.log(response);
    };

    const responseGoogle = (response) => {
        console.log(response);
    };

    const handleSubmit = () => {
        alert("Sign Up successful !!");
    };

    return (
        <div className="page-wrapper container-fluid">
            <div className="logo-wrapper row">
                <div className="col-9 logo-container">
                    <img
                        src={require("./robo.jpg")}
                        alt="Robo"
                        className="logo col-1.5 "
                        height="100%"
                    />
                </div>
            </div>
            <div className="row">
                <div className="sign-up-wrapper col-lg-4 col-md-8 text-center">
                    <div className="sign-up-header">
                        <h4 className="heading-sub">SIGN UP</h4>
                        <h1 className="heading-main"> Create Your Account</h1>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti laboriosam vitae sunt voluptas
                        </p>
                        <div className="sign-up-btn" data-onsuccess="onSignIn">
                            <GoogleLogin
                                clientId="649673407760-b8posldkvjm5gdmnfgf61b86cfdle59d.apps.googleusercontent.com"
                                buttonText="Sign Up With Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                render={(renderProps) => (
                                    <button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="btn sign-up-btn"
                                    >
                                        <i className="fa fa-google">{"  "} </i>
                                        {"   "}
                                        Sign Up With Google
                                    </button>
                                )}
                            />
                        </div>
                        <div className="sign-up-btn">
                            <FacebookLogin
                                appId="238788654126527"
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssClass="btn sign-up-btn"
                                icon="fa-facebook"
                            />
                        </div>
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <hr
                                style={{
                                    color: "black",
                                    height: "1.5rem",
                                    width: "40%",
                                }}
                            />
                            or
                            <hr
                                style={{
                                    color: "black",
                                    height: "1.5rem",
                                    width: "40%",
                                }}
                            />
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        action="https://reqres.in"
                        method="POST"
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoFocus
                                placeholder="First name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div
                            className="form-group"
                            style={{ marginBottom: "2.5rem" }}
                        >
                            <input
                                type={passwordShown ? "text" : "password"}
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                style={{
                                    display: "inline",
                                }}
                            />
                            <i
                                style={{
                                    display: "block",
                                    cursor: "pointer",
                                    margin: "-1.8rem",
                                    position: "absolute",
                                    right: "23%",
                                }}
                                onClick={togglePasswordVisiblity}
                            >
                                {eye}
                            </i>
                        </div>
                        <p className="form-group text-muted">
                            By Clicking Sign Up, you agree to our
                            <Link> Terms of Use </Link>
                            and our
                            <Link> Privacy Policy </Link> .
                        </p>
                        <div className="form-group">
                            <button className="btn btn-primary sign-up-btn">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
