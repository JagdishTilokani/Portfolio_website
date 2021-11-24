import React from "react";
// import { useState } from "react";
import "./SidebarOption.css";
import Icon from "@material-ui/core/Icon";
import { useNavigate } from "react-router-dom";
// import Projects from "./Projects";
// import Python from "./Python";
// import ProjectList from "./ProjectList";

function SidebarOption(props) {
    const navigate = useNavigate();
    // console.log(props.title);
    return (
        <div
            className="sidebarOption"
            onClick={() => {
                props.onselect();
                navigate("link");
            }}
        >
            <Icon className={props.classname} />
            {/* <h3>{props.title}</h3> */}
            <p>{props.number}</p>
        </div>
    );
}

export default SidebarOption;
