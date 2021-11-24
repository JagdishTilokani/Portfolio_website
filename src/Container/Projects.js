import React from "react";
// import { Routes, useNavigate, Route } from "react-router-dom";
import "./Projects.css";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ProjectList from "./ProjectList";

function Projects(props) {
    const [title, setTitle] = useState(null);

    const setTitleValue = (title) => {
        setTitle(title);
        // console.log(typeof title);
    };

    return (
        <div className="Project_Container">
            <Sidebar onselect={setTitleValue} />
            {title && <ProjectList title={title} />}
        </div>
    );
}

export default Projects;
