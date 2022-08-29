import NovvyNow from "../images/NovvyNow.png";
import NN from "../images/NN.png";
import "../components/app/App.css";
import { Link } from "react-router-dom";


const Layout = () => {
        return (
            <body className="novBody">
              <div className="novDiv">
                <img className="novSplash" src={NovvyNow} alt="Nov" />
              </div>
              <div className="navButtons">
              <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>HOME</Link>
              <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>ABOUT</Link>
              <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>MUSIC</Link>
              <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>CONTACT</Link>
              </div>
              <div className="nnDiv">
                <img src={NN} className="NN" alt="NN" />
              </div>
            </body>
          );
  };
  
  export default Layout;