// import "./index.css";
// import "./App.css";
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Header } from "./Components/Header/Header";
// import { Main } from "./Components/Main/Main";
// import { Footer } from "./Components/Footer/Footer";
// import { dataMock } from "./dataMock";
// import { TaskInterface } from "./Components/Main/Main";
// import { TaskDetails } from "./Components/TaskDetails/TaskDetails";

// function App() {
//   const storedTasks = localStorage.getItem("tasks");
//   const [updatedTasks, setUpdatedTasks] = useState<TaskInterface[]>(
//     storedTasks ? JSON.parse(storedTasks) : dataMock
//   );
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Main
//               tasks={dataMock}
//               updatedTasks={updatedTasks}
//               setUpdatedTasks={setUpdatedTasks}
//             />
//           }
//         />
//         <Route path="/task/:id" element={<TaskDetails tasks={dataMock} />} />
//       </Routes>
//       <Footer tasks={dataMock} updatedTasks={updatedTasks} />
//     </Router>
//   );
// }

// export default App;


import "./index.css";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
import { dataMock } from "./dataMock";
import { TaskInterface } from "./Components/Main/Main";
import { TaskDetails } from "./Components/TaskDetails/TaskDetails";

function App() {
  const storedTasks = localStorage.getItem("tasks");
  const initialTasks = storedTasks ? JSON.parse(storedTasks) : dataMock;
  
  const [updatedTasks, setUpdatedTasks] = useState<TaskInterface[]>(initialTasks);

  console.log(storedTasks ? JSON.parse(storedTasks) : null);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              updatedTasks={updatedTasks}
              setUpdatedTasks={setUpdatedTasks}
            />
          }
        />
        <Route path="/task/:id" element={<TaskDetails tasks={updatedTasks} />} />
      </Routes>
      <Footer tasks={dataMock} updatedTasks={updatedTasks} />
    </Router>
  );
}

export default App;
