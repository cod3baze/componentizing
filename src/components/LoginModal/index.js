import React from "react";
// STYLES | STATIC
import "./styles.css";

const LoginModal = ({ handleModalControls }) => {
  return (
    <div className="create-account">
      <div id="controls">
        <button onClick={handleModalControls} id="disable">
          X
        </button>
      </div>
      <div className="wrapper">
        <h3>Create an account!</h3>
        <form id="form-create">
          <div id="group-block">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome de usuário"
              required
            />
          </div>

          <div id="group-block">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              id="email"
              required
            />
          </div>

          <div id="group-block">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Senha secreta"
              id="password"
              required
            />
          </div>

          <button id="creation" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
