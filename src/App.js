// import react packages
import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom'

// import styles
import './App.css';

// import pages
import HomePage from "./pages/home";
import ExperiencePage from "./pages/experience";
import ProjectsPage from "./pages/projects";

// import nav
import NavBar from "./components/nav";

// serve the App using React
const App = () => {
  return (
    <div className="App">

        <React.Fragment>
            <NavBar />
        </React.Fragment>
      <HashRouter>
         <Routes>
           <Route exact path="/" name="Home Page" element={<HomePage/>} />
           <Route exact path="/experience" name="Music" element={<ExperiencePage/>} />
           <Route exact path="/projects" name="Music" element={<ProjectsPage/>} />
         </Routes>
     </HashRouter>

    </div>
  );
}


export default App;
