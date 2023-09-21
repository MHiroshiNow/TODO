import React, { useState } from 'react';
import AudioUploadForm from '../AudioUploadForm/index';
import TaskForm from '../TaskForm/TaskForm';
import './AddTaskPage.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faArrowLeft, faCaretDown, faCaretRight, faMicrophone, faTasks } from '@fortawesome/free-solid-svg-icons';  

function AddTaskPage() {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [showAudioForm, setShowAudioForm] = useState(false);

    return (
        <div className="container mt-5 add-task-container">
            <div className="header mb-4">
                <h1 className="display-4">Let's Plan! <FontAwesomeIcon icon={faTasks} /></h1>
                <button className="btn btn-outline-info btn-lg" onClick={() => window.location.href="/tasks"}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Go Back
                </button>
            </div>
            
            <div className="section-toggle" onClick={() => setShowTaskForm(!showTaskForm)}>
                <h2><FontAwesomeIcon icon={faTasks} />  Manuel <FontAwesomeIcon icon={showTaskForm ? faCaretDown : faCaretRight} /></h2>
            </div>
            {showTaskForm && <TaskForm />}

            <div className="section-toggle" onClick={() => setShowAudioForm(!showAudioForm)}>
                <h2><FontAwesomeIcon icon={faMicrophone} /> Auto <FontAwesomeIcon icon={showAudioForm ? faCaretDown : faCaretRight} /></h2>
            </div>
            {showAudioForm && <AudioUploadForm />}
        </div>
    );
}

export default AddTaskPage;
