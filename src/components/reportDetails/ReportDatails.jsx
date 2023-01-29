import "./reportDatails.css";
import NoPath from "../../assets/images/NoPath.png";
import underline from "../../assets/images/underline.png";
function ReportDetails() {
  return (
    <>
      <div className="container-fluid py-5" id="bootcamps">
        <div className="row">
          {/* section one */}
          <div className="col-sm-12 col-lg-5 pt-5 section-one">
            <img className="" src={underline} alt="underline" />

            <h3 className="py-1 fw-bold best-platform">
              Best Platform for the
              <br /> Technological Era
            </h3>
            <div className="py-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </div>
            <div className="py-3">
              <span className="h4 learn-about">Learn About Our Success</span>
            </div>
          </div>

          {/* section two */}
          <div className="col-sm-12 col-lg-7">
            <img className="w-100 img-report" src={NoPath} alt="image2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportDetails;
