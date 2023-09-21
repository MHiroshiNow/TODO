import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import AddTaskPage from "./components/AddTaskPage/AddTaskPage";
import TaskListPage from "./components/TaskListPage/TaskListPage";
import AudioUploadForm from './components/AudioUploadForm';
import RegisterForm from './components/RegisterForm/RegisterForm';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/makeAccount" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
