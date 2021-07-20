import React from "react";

function Login() {
  return (
    <div>
      {/* Login form with email and password */}
      <form className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <label className="sr-only" htmlFor="inputEmail">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
        />
        <label className="sr-only" htmlFor="inputPassword">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
