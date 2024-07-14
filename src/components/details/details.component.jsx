import "./details.styles.scss";

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
              Back in 2017, I decided to try my hand at web development
              andtumbled head first into the rabbit hole of coding and
              full-stack development. Fast-forward to today, I had the privilege
              of building software for an aerospace industry and a fortune
              global corporation.
            </p>
          </div>
        </div>
        <div className="custom-vh-70" id="list-item-2">
          <div class="card mb-3 custom-no-border">
            <div class="row g-0">
              <div class="col-md-2">
                <p className="mt-3 text-body-secondary">2021-2024</p>
                {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <h5 class="card-title">
                    Software Developer
                    <span className="text-body-secondary">
                      @Lumen Technologies
                    </span>
                  </h5>
                  <p class="card-text">
                    Developed a fraud detection API for ctl.io's public-facing
                    self-service registration, blocking 139 harmful entities and
                    preventing potential fraud worth $3 million for Lumen in
                    2023. Integrated Google address verification and MaxMind
                    data to ensure business registration accuracy and review.
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
                  <Skill skill="JavaScript" />
                  <Skill skill="NodeJS" />
                  <Skill skill="AWS" />
                  <Skill skill="SQL" />
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
                  <h5 class="card-title">
                    Software Engineer Internship
                    <span className="text-body-secondary">@LMI Aerospace</span>
                  </h5>
                  <p class="card-text">
                    Developed and launched 14 SharePoint pages for various teams
                    within the company. Also, collaborated with senior
                    developers to clean up code and enhance logging for
                    real-time data tracking in a .NET and C# web applications.
                  </p>

                  <Skill skill="C#" />
                  <Skill skill="AWS" />
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
                  <h5 class="card-title">
                    Research Assistant
                    <span className="text-body-secondary">
                      @South Dakota State University
                    </span>
                  </h5>
                  <p class="card-text">
                    Specialized in deep learning for computer vision with Keras,
                    Python, Linux, and Google Colab, enhancing the U-Net
                    semantic segmentation model to improve detection accuracy of
                    structural damages on bridges. Contributed to advanced
                    research and authored a master's thesis (details in
                    Publication section).
                  </p>

                  <Skill skill="ComputerVision" />
                  <Skill skill="Linux" />
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3 custom-no-border">
            <div class="row g-0">
              <div class="col-md-2">
                <p id="list-item-1" className="mt-3 text-body-secondary">
                  2018-2019
                </p>
                {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <h5 class="card-title">
                    Teaching Assistant
                    <span className="text-body-secondary">
                      @South Dakota State University
                    </span>
                  </h5>
                  <p class="card-text">
                    Mentored first-year computer science students for 12 hours
                    weekly, providing guidance in C/C++ programming and data
                    structures during office hours. o Assisted in evaluating and
                    grading assignments for a C++ programming course.
                  </p>

                  <Skill skill="C" />
                  <Skill skill="C++" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
