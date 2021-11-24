import React from 'react'
import './Projects.css'
import Sidebar from './Sidebar';
import Python from './Python';
// import {BrowserRouter as Router,Route,  Routes } from 'react-router-dom';
import ProjectList from './ProjectList';
function Projects({titles}) {
  return (
    <div className="Project_Container">
      <Sidebar />
      <ProjectList /> 
    </div>
  )
}

export default Projects
