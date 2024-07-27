import "./task.css";
import { Link } from "react-router-dom";



interface TaskProps {
  name: string;
  id: string | number
}

export const Task = ({ name, id }: TaskProps) => {
  return (
    <Link className="task-link" to={`/task/${id}`}>
      <div className="task">
        <p className="task-text">{name}</p>
      </div>
    </Link>
  );
};
