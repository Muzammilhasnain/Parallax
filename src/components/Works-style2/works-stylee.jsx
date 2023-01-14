/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";
import ContactForm from "../../components/Contact-form/contact-form";
const WorksStylee = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Collaborate with us
                </h6>
                <h3 className="wow color-font">
                  Fill the form acoording <br /> to your query.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </section>
  );
};
export default WorksStylee;