import "./Experience.css";
import Navbar from "./Navbar";
import PC2Image from "./img/work _1.jpg"
import PC1Image from "./img/work_2.jpg"
import PC3Image from "./img/work_3.jpg"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="ontoy">

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Experiences
              </h1>
    <div className="exp">
    <div className="container">
          <hr/>
          <div className="row mb-5">
            <h3 className="text-center"> during On-the Job Training</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={PC1Image} />
          <h4 className="three text-black">Aircon Repair</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={PC2Image} />
          <h4 className="three text-black">Photo Copying</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={PC3Image} />
          <h4 className="three text-black">Checking of hacienda tickets</h4>
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

export default Experience;
