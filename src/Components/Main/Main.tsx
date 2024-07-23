import React, { useState } from "react";
import "./main.css";
import { Task } from "../Task/Task";
import { TaskData } from "../../dataMock";

interface CardProps {
  tasks: TaskData[];
}
export const Main = ({ tasks }: CardProps) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddInput = () => {
    setInputVisible(true);
  };

  const handleSubmit = () => {
    // Добавить логику для сохранения значения инпута или отправки формы
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <div className="main">
      <div className="card">
        <p className="card-text">Backlog</p>
        <div className="card-content">
          {tasks
            .filter((task) => task.title === "Backlog")
            .map((task) => (
              <Task name={task.name} />
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
          <button className="submit-task-button" onClick={handleSubmit}>
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
          {tasks
            .filter((task) => task.title === "Ready")
            .map((task) => (
              <Task name={task.name} />
            ))}
        </div>
      </div>
      <div className="card">
        <p className="card-text">In progress</p>
        <div className="card-content">
          {tasks
            .filter((task) => task.title === "In progress")
            .map((task) => (
              <Task name={task.name} />
            ))}
        </div>
        <button className="add-task-button">
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
          {tasks
            .filter((task) => task.title === "Finished")
            .map((task) => (
              <Task name={task.name} />
            ))}
        </div>
        <button className="add-task-button">
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
