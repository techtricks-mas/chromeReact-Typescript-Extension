import React from "react";
import ReactDOM from "react-dom/client";
import "./popup.css";

const test = (
  <div className="main">
    <div id="auth">
      <div className="container">
        <div className="item-container">
          <h2 className="log-in">Log in</h2>
        </div>
        <div className="item-container">
          <a href="http://207.244.242.41/login" target="_blank">
            <img src="logo.png" className="logo" />
          </a>
        </div>
        <div className="item-container">
          <p>or login using email</p>
        </div>
        <form>
          <div className="form-input">
            <label className="label">Email</label>
            <input type="text" className="fromItem" />
          </div>
          <div className="form-input">
            <label className="label">Password</label>
            <input type="password" className="fromItem" />
            <span id="eyeOpen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </span>
            <span id="eyeClose">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            </span>
          </div>
          <div className="display-space-between">
            <div>
              <input type="checkbox" />
              <label className="chekbox-label">Remember Me</label>
            </div>
          </div>
          <div>
            <button type="button" id="submitButton">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const root = document.createElement("div");
document.body.appendChild(root);
const app = ReactDOM.createRoot(document.querySelector("div") as HTMLElement);
app.render(test);
