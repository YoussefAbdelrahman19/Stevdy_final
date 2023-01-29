import "./testimonial.css";
import number from "../../assets/images/570.png";
import card from "../../assets/images/card.png";
import ellipses from "../../assets/images/ellipses.png";

function Testmonials() {
  return (
    <>
      <div className="container-fluid py-5" id="Testemonial">
        <div className="row">
          {/* section one */}
          <div className="col-sm-12 text-center">
            <h1 className="py-5 fw-bold">
              Don't Just Take <br />
              our Word for it!
            </h1>
            <div className="row mx-5 px-5 mt-5 pt-3">
              <div className="col-sm-6 col-md">
                <span>
                  <img className="w-25 " src={number} alt="" />
                </span>
                <h4 className="pt-2 fw-bold">Dowloads</h4>
              </div>
              <div className="col-sm-6 col-md">
                <span>
                  <img className="w-25 " src={number} alt="" />
                </span>
                <h4 className="pt-2 fw-bold">Active User</h4>
              </div>
              <div className="col-sm-6 col-md">
                <span>
                  <img className="w-25 " src={number} alt="" />
                </span>
                <h4 className="pt-2 fw-bold">Positive Feedback</h4>
              </div>
              <div className="col-sm-6 col-md">
                <span>
                  <img className="w-25" src={number} alt="" />
                </span>
                <h4 className="pt-2 fw-bold">+ rating</h4>
              </div>
            </div>
          </div>
          {/* cards section */}
          <div className="row  px-5 mt-5 pt-3">
            <div className="col-sm-12 col-xl-6 text-center ">
              <div>
                <img className="d-none d-md-block" src={card} alt="" />
                <img className="d-sm-block d-md-none w-100" src={card} alt="" />
              </div>
              <div className="text-center">
                <img src={ellipses} alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-xl-6 pt-5 px-5">
              <h1 className="py-1 fw-bold heading">
                Grow Your Business and <br /> Join Our Happy Users
              </h1>
              <div className="py-2 fs-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing <br />
                elitr, sed tempor invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua. At vero eos et accusam
                <br /> et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no
                <br /> sea takimata sanctus est Lorem ipsum dolor sit amet
              </div>
              <div className="py-4 ">
                <a
                  href="#footer"
                  className="about-us-button rounded btn px-4 border-none elem5 fw-bold"
                >
                  About us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testmonials;
