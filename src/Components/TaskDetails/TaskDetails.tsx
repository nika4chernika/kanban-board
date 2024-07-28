import "./task-details.css";
import { useState, useEffect } from "react";
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
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveClick = () => {
    console.log("Description saved:", description);
    localStorage.setItem(`task-${taskId}-description`, description);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const savedDescription = localStorage.getItem(`task-${taskId}-description`);
    if (savedDescription) {
      setDescription(savedDescription);
    }
  }, [taskId]);

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <h2>{task?.name}</h2>
        <div className="description-area">
          {description ? (
            <p className="task-description">{description}</p>
          ) : (
            <p>This task has no description.</p>
          )}
           {isEditing ? (
            <>
              <textarea
                className="task-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="save-task-description" onClick={handleSaveClick}>Save</button>
            </>
          ) : (
            <button className="edit-task-description" onClick={handleEditClick}>Edit</button>
          )}
        </div>
        <button className="close-button" onClick={() => navigate("/")}>
          <img src="../images/close-icon.svg" alt="icon" />
        </button>
      </div>
    </div>
  );

};
