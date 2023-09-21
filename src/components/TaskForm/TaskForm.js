import React, { useState } from "react";
import "./TaskForm.css";
import axios from "axios";

function TaskForm() {
  const [taskContent, setTaskContent] = useState("");
  const [taskLabel, setTaskLabel] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskDueTime, setTaskDueTime] = useState("");

  const handleAddTask = () => {
    const taskData = {
      task_content: taskContent,
      label: taskLabel,
      due_date: taskDueDate,
    };

    axios
      .post("http://your-django-server/api/tasks/", taskData)
      .then((response) => {
        console.log("タスクが追加されました:", response.data);
        // 必要であれば、stateの更新や他の処理をここに追加
      })
      .catch((error) => {
        console.error("タスクの追加中にエラーが発生しました:", error);
      });
  };

  return (
    <div className="task-form-container">
      <div className="content-box">
        <h2 className="display-4 mb-4">タスクの追加</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="taskContent" className="form-label">
              タスク内容
            </label>
            <textarea
              className="form-control"
              id="taskContent"
              rows="2"
              value={taskContent}
              onChange={(e) => setTaskContent(e.target.value)}
              placeholder="タスクの内容を記入してください。"
            />
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="taskLabel" className="form-label">
              ラベル
            </label>
            <input
              type="text"
              className="form-control"
              id="taskLabel"
              value={taskLabel}
              onChange={(e) => setTaskLabel(e.target.value)}
              placeholder="例：仕事、私用など"
            />
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="taskDueDate" className="form-label">
              期限
            </label>
            <input
              type="date"
              className="form-control mb-2"
              id="taskDueDate"
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}
            />
            <input
              type="time"
              className="form-control"
              id="taskDueTime"
              value={taskDueTime}
              onChange={(e) => setTaskDueTime(e.target.value)}
            />
          </div>
        </div>

        <div className="text-right mt-4">
          <button
            className="btn btn-primary"
            type="button"
            id="addTaskButton"
            onClick={handleAddTask}
          >
            タスクを追加
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
