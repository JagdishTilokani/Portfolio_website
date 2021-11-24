import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import ReorderIcon from '@material-ui/icons/Reorder';
// import Profile from '../Home/Profile';

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    //   console.log(location.pathname)
    //   location.pathname.includes('Profile') ? console.log('true'): console.log(9)
    return (
        <div className="Nav">
            <div className="logo">
                <h1>Nothing </h1>
            </div>
            <div className="menu-trans">
                <nav>
                    <ul>
                        <li>
                            <div
                                className={
                                    location.pathname.includes("Profile")
                                        ? "active"
                                        : ""
                                }
                                onClick={() => navigate("/Profile")}
                            >
                                Profile
                            </div>
                        </li>
                        <li>
                            <div
                                className={
                                    location.pathname.includes("Projects")
                                        ? "active"
                                        : ""
                                }
                                onClick={() => navigate("/Projects")}
                            >
                                Projects
                            </div>
                        </li>

                        <li>
                            <div
                                className={
                                    location.pathname.includes("ContactInfo")
                                        ? "active"
                                        : ""
                                }
                                onClick={() => navigate("/ContactInfo")}
                            >
                                Contacts
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
