import React, { useState } from "react";

const Form = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstname, lastname, email, password, confirmpassword };
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
  };
  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        {firstname.length < 2 && firstname.length > 0 ? (
          <p>First Name must be at least 2 characters</p>
        ) : null}
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        {lastname.length < 2 && lastname.length > 0 ? (
          <p>Last Name must be at least 2 characters</p>
        ) : null}
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {email.length < 5 && email.length > 0 ? (
          <p>Email must be at least 5 characters</p>
        ) : null}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {password.length < 8 && password.length > 0 ? (
          <p>Password must be at least 8 characters</p>
        ) : null}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
        {confirmpassword !== password ? <p>Passwords must match</p> : null}
      </form>
      <div>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmpassword}</p>
      </div>
    </>
  );
};

export default Form;
