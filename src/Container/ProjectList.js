import React from "react";
import "./ProjectList.css";
// import Python from "./Python";
// import Javascript from "./Javascript";
// import PHP_SQL from "./PHP_SQL";

function ProjectList(props) {
    const Variable = props.title;
    console.log(Variable);
    return (
        <div className="List_Container">
            <div className="allProjects">{Variable}</div>
        </div>
    );
}

export default ProjectList;
