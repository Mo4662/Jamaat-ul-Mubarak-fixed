import React from "react";

function Register() {
  return (
    <div className="page register">
      <h1>Register</h1>
      <form name="register" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="register" />
        <input type="text" name="fullname" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
