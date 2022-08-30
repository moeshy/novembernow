import NovvyNow from "../images/NovvyNow.png";
import NN from "../images/NN.png";
import "../components/app/App.css";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import BoxSx from "../components/imagebox";
const Layout = () => {
        return (
            <body className="novBody">
              <div className="novDiv">
                <img className="novSplash" src={NovvyNow} alt="Nov" />
              </div>
              <div className="navButtons">
              <Link to="/profile" style={{ textDecoration: "none", color: "black" }}><BoxSx/></Link>

              </div>
              
              {/* <div className="nnDiv">
                <img src={NN} className="NN" alt="NN" />
              </div> */}
              <Footer/>
            </body>
          );
  };
  
  export default Layout;