import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // エラーメッセージのstateを追加

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/api/login/", userData)
      .then((response) => {
        console.log("ログイン成功:", response.data);
        localStorage.setItem("token", response.data.token); // トークンをローカルストレージに保存
      });
  };

  return (
    <div className="login-container">
      <h1 className="display-4 mb-5">ログイン</h1>
      <form className="mt-3" id="loginForm" onSubmit={handleLogin}>
        <div className="form-group mb-4">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg mb-4">
          ログイン
        </button>
      </form>
      <footer className="mt-5">
        <a href="makeAccount" className="btn btn-outline-info btn-lg">
          新規登録を行う
        </a>
      </footer>
    </div>
  );
}

export default LoginForm;
