import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/tuga pic.jpg"

const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
         


        <div className="container mt-5">
          <div className="row ok">
            <div className="col-lg-6">
                <img src={myImage} />
            </div>
            <div className="col-lg-6 jao">
              <div className="card">
              <h2 className=" fw-bold display-3 text-center text-black mb-5">
                Greetings! <br/> I'm Babeto L. Chua Jr.
              </h2>
              <h4 className=" text-black text-center mt-5"> I am a hard working and my moto of our life i gunna play  some sport like sipak takraw basket ball specially rides with may baby labs. </h4>
              <center>
              <a href="/about" className="btn shadow mt-5 fw-bold">
                Explore More
              </a>
              </center>
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

export default Home;

