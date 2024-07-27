import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./main.css";
import { Task } from "../Task/Task";

export interface TaskInterface {
  title: string;
  id: string | number;
  name: string;
  description: string;
}

export interface CardProps {
  updatedTasks: TaskInterface[];
  setUpdatedTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
}

interface NewTaskInterface {
  title: string;
  id: string | number;
  name: string;
  description: string;
}

export const Main = ({ updatedTasks, setUpdatedTasks }: CardProps) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [showSelect, setShowSelect] = useState({
    readySelect: false,
    inProgressSelect: false,
    finishedSelect: false,
  });

  const generateUUID = (): string => {
    return uuidv4();
  };

  const handleAddInput = () => {
    setInputVisible(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const newTask: NewTaskInterface = {
      title: "Backlog",
      id: generateUUID(),
      name: inputValue,
      description: "",
    };
    if (inputValue.trim().length > 0) {
      setUpdatedTasks((prevTasks) => {
        const newTasks = [...prevTasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        return newTasks;
      });
      setInputVisible(false);
      setInputValue("");
    } else {
      alert("Некорректный ввод");
    }
  };

  const handleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    state: string
  ): void => {
    console.log(e.target.value);
    setUpdatedTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.name === e.target.value ? { ...task, title: state } : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  useEffect(() => {}, [updatedTasks]);

  return (
    <div className="main">
      <div className="card">
        <p className="card-text">Backlog</p>
        <div className="card-content">
          {updatedTasks
            .filter((task) => task.title === "Backlog")
            .map((task) => (
              <Task name={task.name} id={task.id} />
            ))}
          {inputVisible && (
            <input
              className="add-task-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
        </div>
        {inputVisible ? (
          <button
            className="submit-task-button"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        ) : (
          <button className="add-task-button" onClick={handleAddInput}>
            <img
              src="./images/add-task.svg"
              alt="add"
              className="add-task-icon"
            />
            Add task
          </button>
        )}
      </div>
      <div className="card">
        <p className="card-text">Ready</p>
        <div className="card-content">
          {updatedTasks
            .filter((task) => task.title === "Ready")
            .map((task) => (
              <Task name={task.name} id={task.id}/>
            ))}
        </div>
        {showSelect.readySelect && (
          <select
            className="select-main"
            onChange={(e) => handleChangeSelect(e, "Ready")}
          >
            <option className="task" value=""></option>
            {updatedTasks
              .filter((task) => task.title === "Backlog")
              .map((task) => (
                <option className="task">{task.name}</option>
              ))}
          </select>
        )}
        <button
          className="add-task-button"
          onClick={() => setShowSelect({ ...showSelect, readySelect: true })}
        >
          <img
            src="./images/add-task.svg"
            alt="add"
            className="add-task-icon"
          />
          Add task
        </button>
      </div>
      <div className="card">
        <p className="card-text">In progress</p>
        <div className="card-content">
          {updatedTasks
            .filter((task) => task.title === "In progress")
            .map((task) => (
              <Task name={task.name} id={task.id}/>
            ))}
        </div>
        {showSelect.inProgressSelect && (
          <select
            className="select-main"
            onChange={(e) => handleChangeSelect(e, "In progress")}
          >
            <option value=""></option>
            {updatedTasks
              .filter((task) => task.title === "Ready")
              .map((task) => (
                <option>{task.name}</option>
              ))}
          </select>
        )}
        <button
          className="add-task-button"
          onClick={() =>
            setShowSelect({ ...showSelect, inProgressSelect: true })
          }
        >
          <img
            src="./images/add-task.svg"
            alt="add"
            className="add-task-icon"
          />
          Add task
        </button>
      </div>
      <div className="card">
        <p className="card-text">Finished</p>
        <div className="card-content">
          {updatedTasks
            .filter((task) => task.title === "Finished")
            .map((task) => (
              <Task name={task.name} id={task.id}/>
            ))}
        </div>
        {showSelect.finishedSelect && (
          <select
            className="select-main"
            onChange={(e) => handleChangeSelect(e, "Finished")}
          >
            <option value=""></option>
            {updatedTasks
              .filter((task) => task.title === "In progress")
              .map((task) => (
                <option>{task.name}</option>
              ))}
          </select>
        )}
        <button
          className="add-task-button"
          onClick={() => setShowSelect({ ...showSelect, finishedSelect: true })}
        >
          <img
            src="./images/add-task.svg"
            alt="add"
            className="add-task-icon"
          />
          Add task
        </button>
      </div>
    </div>
  );
};
