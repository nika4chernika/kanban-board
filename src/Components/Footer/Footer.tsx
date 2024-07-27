// import "./footer.css";

// export const Footer = () => {
//   //временные переменные для вывода данных
//   let activeTasks = 3;
//   let finishedTasks = 5;

//   return (
//     <footer className="footer">
//       <div className="tasks-footer">
//         <p className="active-task-footer">Active tasks: {activeTasks}</p>
//         <p className="finished-task-footer">Finished tasks: {finishedTasks}</p>
//       </div>
//       <p className="developer-info-footer">Kanban board by Nika P, 2024</p>
//     </footer>
//   );
// };


import "./footer.css";
import { TaskData } from "../../dataMock";
import { TaskInterface } from "../Main/Main"

export interface FooterProps {
  tasks: TaskData[];
  updatedTasks: TaskInterface[];
}

export const Footer = ({ tasks, updatedTasks }: FooterProps) => {
  const activeTasks = updatedTasks.filter((task) => task.title === "Backlog").length;
  const finishedTasks = updatedTasks.filter((task) => task.title === "Finished").length;

  return (
    <footer className="footer">
      <div className="tasks-footer">
        <p className="active-task-footer">Active tasks: {activeTasks}</p>
        <p className="finished-task-footer">Finished tasks: {finishedTasks}</p>
      </div>
      <p className="developer-info-footer">Kanban board by Nika P, 2024</p>
    </footer>
  );
};