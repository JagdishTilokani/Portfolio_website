import React from "react";
import { useState } from "react";
import "./SidebarOption.css";
import Icon from "@material-ui/core/Icon";
// import { useNavigate } from "react-router-dom";
// import Projects from "./Projects";
// import Python from "./Python";
import ProjectList from "./ProjectList";
function SidebarOption(props) {
    // const navigate = useNavigate();
    const [navigate, setNavigate] = useState(false);
    // console.log(props.title);
    return (
        <div>
            <div className="sidebarOption" onClick={() => setNavigate(true)}>
                <Icon className={props.classname} />
                {/* <h3>{props.title}</h3> */}
                <p>{props.number}</p>
            </div>
            {navigate && <ProjectList title={props.title} />}
        </div>
    );
}

export default SidebarOption;
