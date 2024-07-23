import React from 'react';
import "./index.css"
import './App.css';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Footer } from "./Components/Footer/Footer";
import { dataMock } from './dataMock';

function App() {
  return (
    <div className="App">
      <Header />
      <Main tasks={dataMock}/>
      <Footer />
    </div>
  );
}

export default App;
