import React from "react";
import fadeWhenScroll from "../../common/fadeWhenScroll";

const WorksHeader2 = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">Products & Services</h1>
                <p>
                  Creativity involves breaking out of expected &amp; repeatable
                  patterns in order to look at things in different way than ever
                  before.
                </p>
              </div>

              <div className="bactxt custom-font valignn ">
                <span className="full-width"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorksHeader2;
