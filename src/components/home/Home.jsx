import NoPath from "../../assets/images/NoPath.png";
import "./home.css";
import Navbar from "./Navbar/Navbar";
import Platform from "./platforms/Platform";

function Home() {
  return (
    <>
      <div className="container-fluid home-page">
        <Navbar />
        <div className="row pt-4">
          {/* section 1 */}
          <div className="col-md-6 section-1 pl-5 pt-3">
            <p className="advanced-platform">Advanced Platform</p>
            <h1 className="take-team">
              Take your team
              <br /> to the next level
            </h1>
            <div className="py-3 lorem">
              Lorem ipsum dolor sit amet, consetetur sadipscing
              <br /> elitr, sed diam nonumy eirmod
            </div>

            <a
              href="#footer"
              className="about-us-button-home rounded btn px-5 border-none mt-3"
            >
              About us
            </a>
          </div>
          {/* section 2 */}

          <div className="col-sm-12  col-md-6">
            <img src={NoPath} className="w-100 " alt="admin Panal" />
          </div>
        </div>
        <div className="">
          <Platform />
        </div>
      </div>
    </>
  );
}

export default Home;
