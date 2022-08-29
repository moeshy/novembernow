import NovvyNow from "../images/NovvyNow.png";
import NN from "../images/NN.png";
import "../components/app/App.css";


const Layout = () => {
        return (
            <body className="novBody">
              <div className="novDiv">
                <img className="novSplash" src={NovvyNow} alt="Nov" />
              </div>
              <div className="nnDiv">
                <img src={NN} className="NN" alt="NN" />
              </div>
            </body>
          );
  };
  
  export default Layout;