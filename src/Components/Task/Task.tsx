import React from "react";
import "./task.css";

interface TaskProps {
  name: string;
}

export const Task = ({ name }: TaskProps) => {
  return (
    <div className="task">
      <p className="task-text">
        {name}
      </p>
    </div>
  );
};