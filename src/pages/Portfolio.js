import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/calculator.png"
import ontoy1Image from "./img/js pic.png"
import ontoy2Image from "./img/bab 2.png"
import jao5Image from "./img/dasboad pic.jpg"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="ontoy">
       
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Portfolio 
              </h1>
      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h3> My Projects:</h3> 
            <hr />
          <div className="col">
          <img className="one" src={calcuImage2} />
          <h4 className="mt-5">Calculator</h4>
          </div>
          <div className="col">
          <img className="three" src={ontoy2Image} />
          <h4 className="mt-5">System Integrations</h4>
          </div>
          <div className="col">
          <img className="four" src={jao5Image} />
          <h4 className="mt-5">Capstone Project</h4>
          </div>
          <div className="col">
          <img className="two" src={ontoy1Image} />
          <h4 className="mt-5">My React Js</h4> 
          </div>
          </div>
        </div>
      </div>
      </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Portfolio;
