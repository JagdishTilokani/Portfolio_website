import React from "react";
import "./Sidebar.css";
import Python from "./Python";
import Javascript from "./Javascript";
import PHP_SQL from "./PHP_SQL";
import SidebarOption from "./SidebarOption";

function Sidebar(props) {
    return (
        <div className="sidebar">
            {/* use Navigate */}
            <SidebarOption
                classname={"fab fa-python"}
                onselect={() => {
                    props.onselect(Python);
                }}
                number={2}
            />
            <SidebarOption
                classname={"fab fa-js"}
                onselect={() => {
                    props.onselect(Javascript);
                }}
                number={1}
            />
            <SidebarOption
                classname={"fab fa-php"}
                onselect={() => {
                    props.onselect(PHP_SQL);
                }}
                number={1}
            />
            {/* <SidebarOption
                classname={"fab fa-react"}
                title="React/Firebase"
                number={1}
            /> */}
        </div>
    );
}

export default Sidebar;
