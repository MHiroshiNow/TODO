import React, { useState, useEffect } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { fetchTasks } from "../../api";
import "./TaskList.css"; // スタイリングのインポート
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://your-django-server/api/tasks/")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("タスクの取得中にエラーが発生しました:", error);
      });
  }, []);

  return (
    <div className="task-list-container">
      <h2 className="display-4 mb-4">タスク一覧</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
