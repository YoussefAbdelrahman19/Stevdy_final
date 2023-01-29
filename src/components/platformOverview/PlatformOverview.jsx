import "./platformOverview.css";
import NoPath from "../../assets/images/NoPath.png";
import ellipse from "../../assets/images/ellipse.png";
function PlatformOverview() {
  return (
    <>
      <div className="container-fluid text-center py-5 my-5">
        <div className="row ">
          {/* section one  */}
          <div className="col-sm-12">
            <p className="advanced-customer">
              Advanced Customer Service Platform
            </p>
            <h1 className="fw-bolder py-2">Platform Overview</h1>
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt
              <br /> ut labore et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et accusam et justo duo
              <br />
              dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </div>
          </div>
          {/* section two  */}
          <div className="col-sm-12 py-4 pt-lg-2">
            <div>
              <img className="w-75 panel" src={NoPath} alt="image1" />
            </div>
            <div>
              <img className="text-center" src={ellipse} alt="image2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlatformOverview;
