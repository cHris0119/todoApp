import React from "react";
import "./FormTask.css";

const FormTask = ({ addTask, Task, setTask, updateTask }) => {
  const handleChange = ({ target }) => {
    setTask({
      id: Task.id || null,
      taskName: target.value,
      completed: Task.completed || false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Task.taskName) return;
    if (Task.id !== null) return updateTask(Task);
    addTask(Task.taskName);
  };

  return (
   
    <form className="form" onSubmit={handleSubmit} id={Task.id}>
      <input
        type="text"
        placeholder="Add task..."
        onChange={handleChange}
        value={Task.taskName || ""}
      />
      <input type="submit" value={!Task.id ? "ADD" : "EDIT"} />
    </form>
    
  );
};

export default FormTask;
