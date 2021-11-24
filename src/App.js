import "./App.css";
import Profile from "./Container/Home/Profile";
import NavBar from "./Container/NavBar/NavBar";
import ContactInfo from "./Container/ContactInfo";
import Projects from "./Container/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/Profile" element={<Profile />}></Route>
                    <Route
                        path="/ContactInfo"
                        element={<ContactInfo />}
                    ></Route>
                    <Route path="/Projects/*" element={<Projects />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
