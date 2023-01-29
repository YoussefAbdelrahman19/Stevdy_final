import "./report.css";
import underline from "../../assets/images/underline.png";
import NoPath from "../../assets/images/NoPath.png";
import icon from "../../assets/images/icon.png";

function Report() {
  return (
    <>
      <div className="container-fluid rectangle">
        <div className="row">
          {/* section one */}
          <div className="col-sm-12 col-md-6">
            <img className="w-100 panel" src={NoPath} alt="image" />
          </div>
          {/* section two */}
          <div className="col-sm-12 col-md-6 ">
            <div className="">
              <img className="" src={underline} alt="image" />

              <h1 className="fw-bold">
                Best Platform for the
                <br /> Technological Era
              </h1>
              <div>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam <br />
                nonumy eirmod tempor invidunt ut labore et dolore magna
                <br />
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo
                <br /> duo dolores et ea rebum.
                <br /> Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet
              </div>
              <div className="py-4">
                <span className="h5 fw-bold learn-about">
                  Learn About Our Success
                </span>
                <img className="mx-5 h1 " src={icon} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
