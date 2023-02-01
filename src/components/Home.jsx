import React from "react";
import vg from "../images/2.webp";
import { AiFillGithub, AiOutlineCustomerService } from "react-icons/ai";
import { IoLogoCss3, IoIosPaper } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaAward } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
const Home = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("rahulcv.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "rahulcv.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="home">
        <main>
          <h1>Rahul Technical</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>

      <div className="home2" id="testinomials">
        <img src={vg} alt="vgGraphics" />
        <div>
          <p>
            We are your one and only Solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="service">
        <div>
          <h1> Our Services</h1>
          <p>
            We are your one and only Solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home4" id="skill">
        <div>
          <h1>My Skills</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <IoLogoCss3 />
              <p>React</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillGithub />
              <p>Github</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <SiJavascript />
              <p>Javascript</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <IoLogoCss3 />
              <p>Css</p>
            </div>
          </article>
        </div>
      </div>

      <div className="home5" id="about">
        <div>
          <h1>About Me</h1>
          <main>
            <div className="img_div"></div>
            <div>
              <article>
                <div
                  style={{
                    animationDelay: "0.3s",
                  }}
                >
                  <FaAward />
                  <p>Experience</p>
                  <span>2 years</span>
                </div>
                <div
                  style={{
                    animationDelay: "0.5s",
                  }}
                >
                  <RiProjectorFill />
                  <p>Project</p>
                  <span>20+ Projects</span>
                </div>
                <div
                  style={{
                    animationDelay: "0.7s",
                  }}
                >
                  <AiOutlineCustomerService />
                  <p>Support</p>
                  <span>Online 24/7</span>
                </div>
              </article>
              <button className="btn" onClick={onButtonClick} type="button">
                Download CV
                <IoIosPaper />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
