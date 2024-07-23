import "./footer.css";

export const Footer = () => {
  //временные переменные для вывода данных
  let activeTasks = 3;
  let finishedTasks = 5;

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
