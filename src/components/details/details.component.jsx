import "./details.styles.scss";
import zillowImage from "../../assets/websites/zillow.png";
import zillowImage2 from "../../assets/websites/zillow2.png";
import dadjokesImage from "../../assets/websites/dadjokes.png";

import Skill from "../skill/skill.components";

const Details = () => {
  return (
    <div class="col-10">
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      >
        <div className="custom-vh-70">
          <div class="card mb-3 custom-no-border" id="list-item-1">
            <p class="card-text">
              In 2017, I ventured into web development, diving deep into the
              world of coding and{" "}
              <span className="hover-effect"> full-stack development</span>.
              Today, I've had the privilege of building software for the
              aerospace industry and a Fortune Global corporation.
            </p>
            <p class="card-text">
              Currently, my primary focus is on developing scalable web
              applications using{" "}
              <span className="hover-effect">
                {" "}
                React with Redux Hooks and GraphQL{" "}
              </span>
              .
            </p>
          </div>
        </div>
        <div className="">
          <div id="list-item-2">
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary">2021-2024</p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10 ">
                  <div class="card-body">
                    <h5 class="card-title">Software Developer</h5>
                    <p className="text-body-secondary">
                      @Lumen Technologies (formerly CenturyLink)
                    </p>
                    <p class="card-text">
                      Developed a fraud detection API for ctl.io's public-facing
                      self-service registration, blocking 139 harmful entities
                      and preventing potential fraud worth $3 million for Lumen
                      in 2023. Integrated Google address verification and
                      MaxMind data to ensure business registration accuracy and
                      review.
                    </p>
                    <p className="card-text">
                      <div className="">
                        <a href="https://www.ctl.io" target="_blank">
                          ctl.io
                        </a>
                      </div>
                      <div>
                        <a href="https://www.lumen.com/login/" target="_blank">
                          lumen.com
                        </a>
                      </div>
                    </p>
                    <Skill skill="HTML" />
                    <Skill skill="SCSS/SASS" />
                    <Skill skill="JavaScript" />
                    <Skill skill="TypeScript" />
                    <Skill skill="jQuery" />
                    <Skill skill="Node.js" />
                    <Skill skill="Express" />
                    <Skill skill="AWS" />
                    <Skill skill="SQL" />
                    <Skill skill="Papertrail" />
                    <Skill skill="Vue.js" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p id="list-item-1" className="mt-3 text-body-secondary">
                    2021
                  </p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Software Engineer Internship</h5>

                    <p className="text-body-secondary">@LMI Aerospace</p>
                    <p class="card-text">
                      Developed and launched 14 SharePoint pages for various
                      teams within the company. Also, collaborated with senior
                      developers to clean up code and enhance logging for
                      real-time data tracking in a .NET and C# web applications.
                    </p>
                    <Skill skill="C#" />
                    <Skill skill=".NET" />
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p id="list-item-1" className="mt-3 text-body-secondary">
                    2019-2020
                  </p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Research Assistant</h5>
                    <p className="text-body-secondary">
                      @South Dakota State University
                    </p>
                    <p class="card-text">
                      Specialized in deep learning for computer vision with
                      Keras, Python, Linux, and Google Colab, enhancing the
                      U-Net semantic segmentation model to improve detection
                      accuracy of structural damages on bridges. Contributed to
                      advanced research and authored a master's thesis (details
                      in Publication section).
                    </p>

                    <Skill skill="ComputerVision" />
                    <Skill skill="Linux" />
                    <Skill skill="Python" />
                    <Skill skill="MachineLearning" />
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 custom-no-border custom-vh-70">
              <div class="row g-0">
                <div class="col-md-2">
                  <p id="list-item-1" className="mt-3 text-body-secondary">
                    2018-2019
                  </p>
                  {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Teaching Assistant</h5>
                    <p className="text-body-secondary">
                      @South Dakota State University
                    </p>
                    <p class="card-text">
                      Mentored first-year computer science students for 12 hours
                      weekly, providing guidance in C/C++ programming and data
                      structures during office hours. o Assisted in evaluating
                      and grading assignments for a C++ programming course.
                    </p>

                    <Skill skill="C" />
                    <Skill skill="C++" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="custom-vh-70">
          <div class="card mb-3 custom-no-border" id="list-item-3">
            <p class="card-text">
              Back in 2017, I decided to try my hand at web development
              andtumbled head first into the rabbit hole of coding and
              full-stack development. Fast-forward to today, I had the privilege
              of building software for an aerospace industry and a fortune
              global corporation.
            </p>
          </div>
        </div> */}
        <div className="">
          <div id="list-item-3">
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary">2024.07</p>

                  <img
                    src={zillowImage2}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Zillow v2</h5>
                    {/* <p className="text-body-secondary">
                      @Lumen Technologies (formerly CenturyLink)
                    </p> */}
                    <p class="card-text">
                      A version 2 of the ongoing Zillow project where the
                      customer can purchase service online.
                    </p>
                    <p className="card-text">
                      <div className="">
                        <a
                          href="https://github.com/sun-michael/primitiveZillow2.0"
                          target="_blank"
                        >
                          https://github.com/sun-michael/primitiveZillow2.0
                        </a>
                      </div>
                    </p>
                    <Skill skill="JavaScript" />
                    <Skill skill="SASS" />
                    <Skill skill="FunctionalComponent" />
                    <Skill skill="Hooks" />
                    <Skill skill="GoogleFirebase" />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="card mb-3 custom-no-border">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary">2024.06</p>

                  <img
                    src={zillowImage}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Zillow v1</h5>
                    {/* <p className="text-body-secondary">
                      @Lumen Technologies (formerly CenturyLink)
                    </p> */}
                    <p class="card-text">
                      This personal project mimics Zillow.com’s rental page,
                      showcasing a full-stack web application. The goal is to
                      demonstrate proficiency in front-end and back-end
                      development through a real-world example. The application
                      features a RESTful API and user authentication for secure
                      interactions. Authenticated users can view, edit, and
                      delete rental posts just like on Zillow. The site is
                      deployed on Render for accessibility and operational use.
                    </p>
                    <p className="card-text">
                      <div className="">
                        <a
                          href="https://primitivezillow.onrender.com"
                          target="_blank"
                        >
                          https://primitivezillow.onrender.com
                        </a>
                      </div>
                    </p>
                    <Skill skill="JavaScript" />
                    <Skill skill="Node.js" />
                    <Skill skill="Express" />
                    <Skill skill="MongoDB" />
                    <Skill skill="MapBox" />
                    <Skill skill="GoogleFirebase" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 custom-no-border  custom-vh-70">
              <div class="row g-0">
                <div class="col-md-2">
                  <p className="mt-3 text-body-secondary">2024.06</p>

                  <img
                    src={dadjokesImage}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">Search Jokes</h5>
                    {/* <p className="text-body-secondary">
                      @Lumen Technologies (formerly CenturyLink)
                    </p> */}
                    <p class="card-text">
                      Developed a React web application that allows users to
                      search for dad jokes based on their input.
                    </p>
                    <p className="card-text">
                      <div className="">
                        <a
                          href="https://class-component.onrender.com"
                          target="_blank"
                        >
                          https://class-component.onrender.com
                        </a>
                      </div>
                    </p>
                    <Skill skill="React" />
                    <Skill skill="ClassComponent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-mb">
          <div class="card mb-3 custom-no-border">
            <p class="card-text">
              * Built with JavaScript, React, and Bootstrap. Happy coding :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
