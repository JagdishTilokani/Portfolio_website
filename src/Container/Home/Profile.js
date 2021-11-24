import React from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Profile.css';
function Profile() {
  return (
     <div>
    <div className="container">
        <div className="profile_main">
            <div className="profile_details">
                <div className="social">
                    <a href="https://www.instagram.com/neelmehta08/"><span><InstagramIcon style={{fontSize:"30px",}}/></span></a>
                    <a href="https://www.linkedin.com/in/neel-mehta-71857b1bb/"><span><LinkedInIcon style={{fontSize:"30px"}}/></span></a>
                    <a href="https://github.com/neel0086"><span><GitHubIcon style={{fontSize:"30px"}}/></span></a>
                </div>
                <div className="name">
                    <i><span style={{fontFamily:"Estonia"}}>HOLA, I'am <i><b style={{color:"#ff5823"}}>NEEL</b></i></span></i>
                </div>
                <div className="skill">
                    <div className="skill-wraper">
                        <div className="skill_detail">Web Devloper</div>
                        <div className="skill_detail">Python Programmer</div>
                        
                    </div>
                </div>
                <span style={{fontFamily:"Audiowide",fontSize:"20px"}}>Be irreplaceable,Be Different</span>
            </div>
            {/* <div className="profile_image">
                <div className="image_background"></div>
            </div> */}
            
        </div>
        
    </div>
    </div> 
  )
}

export default Profile
