import "./services.css";
import underline from "../../assets/images/underline.png";
import hq from "../../assets/images/hq.png";
import icon from "../../assets/images/icon.png";
import scale from "../../assets/images/scale.png";
import bootcamps from "../../assets/images/bootcamps.png";
import certified from "../../assets/images/certified.png";

function Services() {
  return (
    <>
      <div className="container sevices" id="browse">
        <div className="row ">
          {/* first section  */}
          <div className="co-sm-12 col-md-6">
            <img className="" src={underline} alt="" />
            <h1 className="py-4 best-business">
              The best business <br />
              solution for you
            </h1>
            <div className="lorem">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              <br />
              nonumy eirmod tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              <br /> duo dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </div>
            <div className="py-4">
              <span className="h3 learn-about">Learn About Our Success</span>
              <img className="mx-5 h1 " src={icon} alt="icon" />
            </div>
          </div>
          {/* second section  */}
          <div className="col-sm-12 col-md-6">
            <div className="d-flex flex-row mb-3">
              <div className="p-2 ">
                <div>
                  <img alt="scale" className="icon" src={scale} />
                </div>
                <h4>Scale Your Activity</h4>
                <div>
                  <img className="" src={underline} alt="underline" />
                </div>
                <div className="lorem">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam
                  <br /> nonumy eirmod tempor invidunt ut <br />
                  labore
                </div>
              </div>
              <div className="p-2 ">
                <div>
                  <img alt="bootcamps" className="icon" src={bootcamps} />
                </div>
                <h4>Bootcamps</h4>
                <div>
                  <img className="" src={underline} alt="underline" />
                </div>
                <div className="lorem">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam
                  <br /> nonumy eirmod tempor invidunt ut <br />
                  labore
                </div>
              </div>
            </div>
            <div className="d-flex flex-row  mb-3">
              <div className="p-2 ">
                <div>
                  <img className="icon" alt="hq" src={hq} />
                </div>
                <h4>Hight Quality</h4>
                <div>
                  <img className="" src={underline} alt="underline" />
                </div>
                <div className="lorem">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam
                  <br /> nonumy eirmod tempor invidunt ut <br />
                  labore
                </div>
              </div>
              <div className="p-2 ">
                <div>
                  <img alt="certified" className="icon" src={certified} />
                </div>
                <h4>Get Certifcation</h4>
                <div>
                  <img className="" src={underline} alt="underline" />
                </div>
                <div className="lorem">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam
                  <br /> nonumy eirmod tempor invidunt ut <br />
                  labore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
