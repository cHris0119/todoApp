import React from "react";
import { useState } from "react";
import "./Task.css";
import { animated, useSpring } from "react-spring";

const Task = ({ task, deleteTask, setTask, updateTask }) => {
  const [checked, setChecked] = useState(task.completed || false);
  const checkboxAnimationStyle = useSpring({
    backgroundColor: checked ? "#808" : "#fff",
    borderColor: checked ? "#808" : "#ddd",
  });

  const handleChecked = () => {
    setChecked(!checked);
    const updatedTask = { ...task, completed: !checked };
    updateTask(updatedTask);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleUpdate = () => {
    setTask({ id: task.id, taskName: task.taskName, completed: checked });
  };
  return (
    <div className="task-container">
      <div className="task">
        <div className="checkbox-container">
          <label>
            <input
              className="checkbox"
              onChange={handleChecked}
              checked={checked}
              type="checkbox"
              id="myCheckbox"
            />

            <animated.svg
              style={checkboxAnimationStyle}
              className={`checkbox ${checked ? "checkbox--active" : ""}`}
              aria-hidden="true"
              viewBox="0 0 15 11"
              fill="none"
            >
              <animated.path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={checked ? "#fff" : "none"}
              />
            </animated.svg>
          </label>
        </div>
        <p>{task.taskName}</p>
      </div>
      <div className="actions-task">
        <button onClick={handleUpdate}>✏️</button>
        <button onClick={handleDelete}>🗑️</button>
      </div>
    </div>
  );
};

export default Task;
