
import "../components/app/App.css";
import BoxSx from "../components/imagebox";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <div className="navButtons">
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}><BoxSx /></Link>

      </div>
      <div className="textMainPage">
        <p> What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        <br></br>
        <p> What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        <br></br>
        <p> What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </div>
      {/* <div className="nnDiv">
                <img src={NN} className="NN" alt="NN" />
              </div> */}
    </>
  );
};

export default About;