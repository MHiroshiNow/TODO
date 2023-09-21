import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            setError('パスワードが一致しません');
            return;
        }

        const userData = {
            email: email,
            password: password
        };
        
        axios.post('http://localhost:8000/api/register/', userData)  // APIエンドポイントを更新
             .then(response => {
                 console.log("ユーザーが登録されました:", response.data);
                 // 必要であれば、ログインページにリダイレクトするなどの処理をここに追加
                 window.location.href = '/login';  // ログインページへリダイレクト
             })
             .catch(error => {
                 console.error("ユーザー登録中にエラーが発生しました:", error);
                 setError("登録できませんでした。もう一度お試しください。");
             });
    };

    return (
        <div className="container mt-5 register-container">
            <div className="header mb-4">
                <h1 className="display-4">新規登録</h1>
                <a href="/login" className="btn btn-outline-info btn-sm">
                    <i className="fas fa-arrow-left"></i> ログインページへ戻る
                </a>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <form className="mt-3" id="registerForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="registerEmail">メールアドレス</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="registerEmail" 
                        placeholder="example@example.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="registerPassword">パスワード</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="registerPassword" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="registerPasswordConfirm">パスワード（確認用）</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="registerPasswordConfirm" 
                        value={passwordConfirm} 
                        onChange={(e) => setPasswordConfirm(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">新規登録</button>
            </form>
        </div>
    );
}

export default RegisterForm;
