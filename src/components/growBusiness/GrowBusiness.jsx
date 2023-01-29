import "./growBusiness.css";
import one from "../../assets/images/one.png";
import trace from "../../assets/images/trace_1.png";
function GrowBusiness() {
  return (
    <>
      <div className="container-fluid py-5" id="How_It_Works">
        <div className="row">
          {/* section one */}
          <div className="col-sm-12 col-lg-5 pt-5 section-one">
            <h1 className="py-1 fw-bold">
              Acceleration Process to
              <br /> Grow Your Business
            </h1>
            <div className="py-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              <br /> diam nonumy eirmod tempor invidunt ut labore et dolore
              <br />
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd <br />
              gubergren , no sea takimata sanctus est Lorem ipsum
              <br /> dolor sit amet
            </div>
            <div className="py-3">
              <a
                href="#footer"
                className="about-us-button rounded btn px-4 border-0 elem5 fw-bold"
              >
                About us
              </a>
            </div>
          </div>

          {/* section two */}
          <div className="col-sm-12 col-lg-7 p-4 ">
            <div className="row">
              <div className="col-1">
                <img src={one} alt="image1" />
              </div>
              <h4 className="col fw-bold mx-5 fs-5">Market Research</h4>
            </div>

            <div>
              <div className="row">
                <div className="col-1 mx-4 my-3">
                  <img src={trace} alt="image2" />
                </div>
                <div className="col py-2 py-md-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <br /> diam nonumy eirmod tempor invidunt ut labore et dolore
                  <br /> magna aliquyam erat, sed diam voluptua.
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="row">
              <div className="col-1">
                <img src={one} alt="image3" />
              </div>
              <h4 className="col fw-bold fs-5 mx-5">Market Research</h4>
            </div>

            <div>
              <div className="row pt-4 pt-md-0">
                <div className="col-1 mx-4 my-3">
                  <img src={trace} alt="image4" />
                </div>
                <div className="col py-2 py-md-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <br /> diam nonumy eirmod tempor invidunt ut labore et dolore
                  <br /> magna aliquyam erat, sed diam voluptua.
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="row pt-4 pt-md-0">
              <div className="col-1">
                <img src={one} alt="image5" />
              </div>
              <h4 className="col fw-bold fs-5 mx-5">Market Research</h4>
            </div>

            <div>
              <div className="row  pt-md-0">
                <div className="col-1 mx-4 my-3"></div>
                <div className="col py-md-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <br /> diam nonumy eirmod tempor invidunt ut labore et dolore
                  <br /> magna aliquyam erat, sed diam voluptua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrowBusiness;
