import React from 'react'
import './SidebarOption.css'
import Icon from "@material-ui/core/Icon";
import {useNavigate} from 'react-router-dom';
import Projects from './Projects';
import Python from './Python';
import ProjectList from './ProjectList';
function SidebarOption({classname,title,number}) {
  // const navigate = useNavigate();
  console.log(title)
  return (
    <div className="sidebarOption" onClick={() => ProjectList(title)}>
        <Icon className={classname} />
        <h3>{title}</h3> 
        <p>{number}</p> 
    </div>
  )
}

export default SidebarOption
