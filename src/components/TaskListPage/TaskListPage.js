import React, { useState } from 'react';
import './TaskListPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faTasks, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';  

function TaskListPage() {
    const [taskContent, setTaskContent] = useState('');
    const [taskLabel, setTaskLabel] = useState('');
    const [taskDueDate, setTaskDueDate] = useState('');

    const handleAddTask = () => {
        // タスク追加ページへのリダイレクト
        window.location.href = "/add-task";
    };

    return (
        <div className="container mt-5 tasklist-container">
            <div className="header mb-4">
                <h1 className="display-4">Your Tasks <FontAwesomeIcon icon={faTasks} /></h1>
                <button className="btn btn-outline-info btn-lg" onClick={() => window.location.href="/login"}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Logout
                </button>
            </div>
            
            <div className="input-section mb-3">
                <button className="btn btn-primary" onClick={handleAddTask}><FontAwesomeIcon icon={faPlus} /> Add</button>
            </div>

            <ul className="list-group mb-5" id="taskList">
                {/* タスクのリスト表示 */}
            </ul>
        </div>
    );
}

export default TaskListPage;
