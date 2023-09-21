import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';  // スタイルシートのインポート。

function LoginPage() {
    return (
        <div className="login-page-container">
            <div className="content-container">
                <h2 className="display-4 mb-4">ようこそ</h2>
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;
