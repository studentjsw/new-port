import React from "react";
import "../src/project.css";
import project1 from "../src/assets/money manager.png";

import project2 from "../src/assets/log.jpg";

import project3 from "../src/assets/pizzzza.png";
import project4 from "../src/assets/stack.jpg";

function Project() {
  return (
    <>
      <div id="project">
        <div
          class="container card bg-transparent mt-1 p-5  "
          style={{
            border: "1px solid #ce37ad",

            boxShadow: " rgba(90, 56, 88, 0.75) 12px 8px 12px",
          }}
        >
          <h1 class="sub-title text-center myname">Projects</h1>
          <hr />

{/*           <div class="card border-light mb-3 bg-transparent">
            <div class="card-body  text-success">
              <h5 class="card-title text-center fw-bold  text-uppercase">
                {" "}
                Common Credentials
              </h5>
              <hr />
              <p class="card-text text-center text-light">
                <span className="fw-bold  myname text-uppercase">User :-</span>{" "}
                demo@gmail.com || password:123456789
              </p>
            </div>
          </div> */}
         <p style={{ color: "white" , fontSize:"30px", textAlign:"center"}}>
          Here are a few projects I've worked on recently😎
        </p>

          <section id="portfolio" class="portfolio">
            <div class="container">
              <div class="row portfolio-container">
                <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project1} class="img-fluid" alt="" />
<br/>
                    <div className="card-title text-center pt-2">
                      <h4>MERN MONEY TRACKER</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      Keeping track of expenses is also useful in knowing the average 
                      amount of daily, weekly, and monthly expenses. So, if you spend more than normal, 
                      it will be easy to evaluate it. In the end, your money will be used for 
                      necessaryallowing you to track your income and expenses across multiple accounts, 
                      not just checking.  items only and can even be allocated for saving or investmentReact, MUI, 
                      Node  JS, ExpressJS, MongoDB, PayTM payment integration{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/studentjsw/money--front.git"
                        target="blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://stunning-narwhal-502ffb.netlify.app/"
                        target="blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/studentjsw/money-backend.git"
                        target="blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div class="card  bg-transparent border-dark">
                    <img src={project2} class="img-fluid" alt="" height={"20px"} />
                    <div className="card-title text-center pt-2"><br/>
                      <h4>LOGIN</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      A simple email Application using MERN stack (ReactJS, MongoDB, Express JS, Node JS) with SMTP.JS and yopmail
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/studentjsw/log-frontend.git"
                        target="blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://funny-madeleine-58d29e.netlify.app/"
                        target="blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/studentjsw/log-backend.git"
                        target="blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project3} class="img-fluid" alt="" />

                    <div className="card-title text-center pt-2"><br/>
                      <h4>PIZZA</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      Application is build using ReactJs, NodeJs, ExpressJs, MongoDB, Mongoose{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/studentjsw/pizza-front.git"
                        target="blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://candid-florentine-b6b5e8.netlify.app/"
                        target="blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/studentjsw/pizza-backend.git"
                        target="blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project4} class="img-fluid" alt="" />

                    <div className="card-title text-center pt-2"><br/>
                      <h4>STACKOVER FLOW</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}<br/>
                      Stack Overflow is a question-and-answer website that unites computer programmers worldwide. 
                      The site serves as a repository of information about computer programming.
                      It's named after the software error that occurs when a program runs out of memory
                      Small application is build using ReactJs, NodeJs, ExpressJs, MongoDB, Mongoose{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/studentjsw/stack-front.git"
                        target="blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://fabulous-selkie-a987de.netlify.app/"
                        target="blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/studentjsw/stack-backend.git"
                        target="blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Project;
