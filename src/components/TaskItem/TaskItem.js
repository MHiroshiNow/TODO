// src/components/TaskItem/TaskItem.js

import React from 'react';

function TaskItem({ task }) {
    return (
        <li>
            {task.content}
        </li>
    );
}

export default TaskItem;
