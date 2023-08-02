import { useState, useEffect } from "react";
import "./App.css";
import FormTask from "./components/FormTask";
import TaskList from "./components/TaskList";

const initialTask = { id: null, taskName: "", completed: false };

function App() {
  const tasksStored = localStorage.getItem("tasks");
  const [taskList, setTaskList] = useState(JSON.parse(tasksStored) || []);
  const [Task, setTask] = useState(initialTask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const addTask = (task) => {
    const newData = {
      id: Math.floor(Math.random() * (100000 - 0 + 1)) + 0,
      taskName: task,
      completed: false,
    };
    setTaskList([...taskList, newData]);
    setTask(initialTask);
  };

  const deleteTask = (id) => {
    const newData = taskList.filter((task) => task.id != id);
    setTaskList(newData);
  };

  const updateTask = (task) => {
    const newData = taskList.map((tarea) =>
      tarea.id === task.id
        ? { ...tarea, taskName: task.taskName, completed: task.completed }
        : tarea
    );
    setTaskList(newData);
    setTask(initialTask);
  };

  return (
    <>
   
    <main>
      <div className="todoList-container">
        <div className="title">
      <h1>Todo App!</h1>

        </div>
        <FormTask
          addTask={addTask}
          updateTask={updateTask}
          Task={Task}
          setTask={setTask}
        />
        <TaskList
          taskList={taskList}
          deleteTask={deleteTask}
          setTask={setTask}
          updateTask={updateTask}
        />
      </div>
    </main>
    </>
  );
}

export default App;
