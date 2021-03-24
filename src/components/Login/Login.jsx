import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

const onSubmit = async (values) => {
  console.log(values);
};

const LoginFinalForm = (props) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login</label>
          <Field
            name="login"
            component="input"
            type="text"
            placeholder="Login"
          />
        </div>
        <div>
          <label>Password</label>
          <Field
            name="password"
            component="input"
            type="text"
            placeholder="Password"
          />
        </div>
        <div>
          <label>Remember Me</label>
          <Field name="rememberMe" component="input" type="checkbox" />
        </div>
        <div className="buttons">
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
        </div>
      </form>
    )}
  />
);

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginFinalForm />
    </div>
  );
};

export default connect(null, {})(Login);
