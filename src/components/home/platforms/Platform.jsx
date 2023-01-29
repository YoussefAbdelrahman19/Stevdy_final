import shopify from "../../../assets/images/shopify.png";
import nearpad from "../../../assets/images/nearpad.png";
import bench from "../../../assets/images/bench.png";
import forbes from "../../../assets/images/forbes.png";
import bumble from "../../../assets/images/bumble.png";

function Platform() {
  return (
    <>
      <div className="container mt-3 mt-md-5 mt-xl-0 pt-xl-0 pt-sm-3  pt-lg-3">
        <div className="row p-5 mx-5">
          <div className="col-6 col-lg">
            <a href="#">
              <img className="w-100" src={shopify} alt="" />
            </a>
          </div>
          <div className="col-6 col-lg">
            <a href="#">
              <img className="w-100" src={nearpad} alt="" />
            </a>
          </div>
          <div className="col-6 col-lg">
            <a href="#">
              <img className="w-100" src={bench} alt="" />
            </a>
          </div>
          <div className="col-6 col-lg">
            <a href="#">
              <img className="w-100" src={forbes} alt="" />
            </a>
          </div>
          <div className="col-6 col-lg">
            <a href="#">
              <img className="w-100" src={bumble} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;
