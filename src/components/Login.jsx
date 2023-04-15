import React from "react";

const Login = () => {
  return (
    <>
      <form action="/dashboard" method="post">
        <div className="inputField1">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="inputField2">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="options">
          <label htmlFor="20">Driver</label>
          <input type="radio" name="option1" id="20" value="20" />
          <label htmlFor="21">User</label>
          <input type="radio" name="option2" id="21" value="21" />
        </div>
        <button type="button">Submit</button>
      </form>
    </>
  );
};

export default Login;
