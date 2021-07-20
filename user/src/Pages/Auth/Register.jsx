import React from "react";

const Register = () => {
  return (
    <div>
      {/* Register forum with email name and password */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1>Register</h1>
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-md-3 control-label">Name</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Email</label>
                <div className="col-md-9">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Password</label>
                <div className="col-md-9">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">
                  Confirm Password
                </label>
                <div className="col-md-9">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-9 col-md-offset-3">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
