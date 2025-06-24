import ContactFormOne from "../forms/ContactFormOne";

const AboutTwo = () => {
  return (
    <div className="axil-about-area ax-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          {/* Contact Form Section */}
          <div className="col-lg-6 col-xl-5 col-md-12 col-12">
            <div className="contact-form-wrapper">
              <div className="axil-contact-form contact-form-style-1">
                <h3 className="title">Get a Free Quote Now</h3>
                <ContactFormOne />
                <div className="callto-action-wrapper text-center">
                  <span className="text">Or call us now</span>
                  <span>
                    <i className="fal fa-phone-alt"></i>{" "}
                    <a href="tel:+919595000040">+91 9595 00 00 40</a>
                  </span>
                </div>

                <div className="shape-group">
                  <div className="shape shape-01">
                    <i className="icon icon-shape-07"></i>
                  </div>
                  <div className="shape shape-02">
                    <i className="icon icon-shape-16"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="col-lg-6 col-xl-5 offset-xl-2 col-md-12 col-12 mt_md--40 mt_sm--40">
            <div className="axil-about-inner">
              <div className="section-title text-start">
                <span className="sub-title extra08-color">About Us</span>
                <h2 className="title">
                  Why Gobind Coach Builders Are One Step Ahead
                </h2>
                <p className="subtitle-2">
                  At Gobind Coach Builders, we combine innovation, engineering precision, and premium craftsmanship to deliver luxury and utility vehicles that lead the industry. Our commitment to customization, design excellence, and modern technology makes every build a showcase of style, strength, and purpose. Whether for public transport or premium travel, we deliver vehicles that meet the evolving demands of the road.
                </p>
              </div>

              {/* Accordion Section */}
              <div
                id="accordion"
                className="axil-accordion mt--15 mt_md--15 mt_sm--15"
              >
                {/* Strategy */}
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="fal fa-compress-wide"></i>
                        <span>Strategy</span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Our strategy focuses on understanding customer needs, market trends, and technological shifts. This allows us to design coaches that are not only functional but also future-ready and cost-effective.
                    </div>
                  </div>
                </div>

                {/* Design */}
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="fal fa-code"></i>
                        <span>Design</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      We prioritize comfort, aesthetics, and user experience in every design. From seating arrangements to lighting and ventilation, every detail is engineered for style, space, and functionality.
                    </div>
                  </div>
                </div>

                {/* Development */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="fal fa-globe"></i>
                        <span>Development</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Our development process includes rigorous testing, cutting-edge materials, and compliance with the latest transport regulations to ensure top-tier performance and safety in every coach.
                    </div>
                  </div>
                </div>
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutTwo;
