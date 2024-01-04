import React from 'react';
// import { useLottie } from "lottie-react";
import animationData from "./lottie/112581-about-us.json";
import abtimg from "./assets/hema.jpeg";

function About() {
  const options = {
    animationData: animationData,
    loop: true
  };

  // const { View } = useLottie(options);
  return (
    <>
      <div id="about" >
        <div class="container card bg-transparent mt-1 p-5" style={{ border: "1px solid #8b3287", boxShadow: "rgba(148, 54, 132, 0.75) 12px 8px 12px" }}>
          <h1 class="sub-title text-center myname">About Me</h1>
          <hr />
          <div class="row pt-5">
            <div class="col-lg-6 col-md-6 col-sm-12 ">
              <div className="card-img-left justify-content-center row-cols-sm-1 "
                data-aos='fade-down-right'>
                 <img
              src={abtimg}
              className="card-img-left bg-light shadow-lg "
              alt="Phot"
              style={{
               height:"22rem",
               width:"18rem",
                borderRadius:"5%",
                transition: "ease-in",
                transitionDelay: "0.2s",
                   }}
            /> 
                
              </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-8 pt-5 ">
              <div class="sec1 pt-5">

                <p className="card-text fw-bold">
                I am a passionate Full Stack Developer👩‍💻 having an experience of building web applications with MERN Stack
      and someother cool libraries😎 and frameworks
                </p>
                <p className="card-text fw-bold">
                Developing highly interactive Frontend/Userinterfaces for web applications🤩
                </p>
                <p className="card-text fw-bold">
                Ability to translate business requirements into innovative software solutions😎
                </p>


              </div>

            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default About