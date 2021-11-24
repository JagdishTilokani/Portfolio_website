import React from "react";
import "./Sidebar.css";
import Python from "./Python";
import Javascript from "./Javascript";
import PHP_SQL from "./PHP_SQL";
import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* use Navigate */}
            <SidebarOption
                classname={"fab fa-python"}
                title={Python}
                number={2}
            />
            <SidebarOption
                classname={"fab fa-js"}
                title={Javascript}
                number={1}
            />
            <SidebarOption
                classname={"fab fa-php"}
                title={PHP_SQL}
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
