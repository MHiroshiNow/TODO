import React, { useState } from 'react';
import './AudioUploadForm.css';
import axios from 'axios';

function AudioUploadForm() {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [taskList, setTaskList] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('audio', file);
        
        axios.post('http://localhost:8000/upload/', formData)
             .then(response => {
                 console.log("音声データがアップロードされました:", response.data);
                 setUploadedFile(response.data);
             })
             .catch(error => {
                 console.error("音声データのアップロード中にエラーが発生しました:", error);
             });
    };

    const handleGenerateList = () => {
        // ここでAPIを呼び出してリストを生成する
        axios.get('http://localhost:8000/api/generate-list/')  // 仮のエンドポイント
             .then(response => {
                 setTaskList(response.data.tasks);  // APIのレスポンス形式に基づいて修正が必要
             })
             .catch(error => {
                 console.error("リスト生成中にエラーが発生しました:", error);
             });
    };

    return (
        <div className="audio-upload-container content-box">
            <h2 className="display-4 mb-4">音声データアップロード</h2>
            <div className="custom-file mb-3">
                <input type="file" className="custom-file-input" id="customFile" onChange={handleFileUpload} />
                <label className="custom-file-label" htmlFor="customFile">ファイルを選択</label>
            </div>
            <div className="text-right mb-4">
                <button className="btn btn-primary" onClick={handleGenerateList}>リストを生成する</button>
            </div>
            <ul className="list-group mb-4" id="generatedList">
                {taskList.map((task, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {task}
                        <div>
                            <button className="btn btn-sm btn-outline-info mr-2">編集</button>
                            <button className="btn btn-sm btn-outline-danger">削除</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="text-right">
                <button className="btn btn-success">リストに追加する</button>
            </div>
        </div>
    );
}

export default AudioUploadForm;
