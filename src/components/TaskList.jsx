import React, { useEffect, useState } from "react";
import Task from "./Task";
import Filter from "./filter";
import "./TaskList.css";

const TaskList = ({ taskList, deleteTask, setTask, updateTask }) => {
  const activeStored = JSON.parse(localStorage.getItem("activeMode"));
  const done = taskList.filter((task) => task.completed === true);
  const todo = taskList.filter((task) => task.completed === false);

  const [filterState, setFilterState] = useState(taskList);
  const [active, setActive] = useState(activeStored || "all");

  const filter = (filterName) => {
    if (filterName === "all") {
      setFilterState(taskList);
    }
    if (filterName === "todo") {
      setFilterState(todo);
    }
    if (filterName === "done") {
      setFilterState(done);
    }
    setActive(filterName);
  };

  const renderedTasks = filterState.map((task) => (
    <Task
      updateTask={updateTask}
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      setTask={setTask}
    />
  ));

  useEffect(() => {
    if (active === "all") {
      setFilterState(taskList);
    } else if (active === "done") {
      setFilterState(done);
    } else if (active === "todo") {
      setFilterState(todo);
    }
  }, [active, taskList]);

  useEffect(() => {
    setActive(active);
    localStorage.setItem("activeMode", JSON.stringify(active));
  }, [renderedTasks]);

  useEffect(() => {
    filter(activeStored);
  }, []);

  return (
    <div className="taskList">
      <Filter
        taskList={taskList}
        filter={filter}
        setActive={setActive}
        active={active}
      />
      <div className="taskList-container">
      {filterState.length === 0 ? <h2 style={{color:'#fff' ,marginTop:'1rem'}}>No hay tareas</h2> : renderedTasks}
      </div>

    </div>
  );
};

export default TaskList;
