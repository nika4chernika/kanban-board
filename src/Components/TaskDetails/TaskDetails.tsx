import "./task-details.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskData } from "../../dataMock";

interface TaskDetails {
  tasks: TaskData[];
}

export const TaskDetails = ({ tasks }: TaskDetails) => {
  const { id } = useParams<{ id: string | undefined }>();
  const navigate = useNavigate();
  const taskId = parseInt(id as string);

  const task = tasks.find((t) => t.id === taskId);

  const [description, setDescription] = useState(task?.description || "");

  const handleSaveClick = () => {
    console.log("Description saved:", description);
  };

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <h2>{task?.name}</h2>
        {description ? (
          <p className="task-description">{description}</p>
        ) : (
          <div className="description-area">
            {!description && <p>This task has no description.</p>}
            <textarea
              className="task-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="save-task-description" onClick={handleSaveClick}>Save</button>
          </div>
        )}
        <button className="close-button" onClick={() => navigate("/")}>
          <img src="./images/close-icon.svg" alt="icon" />
        </button>
      </div>
    </div>
  );
};
