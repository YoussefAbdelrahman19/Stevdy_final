import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="stevdy-footer" id="footer">
        <div className="container pt-5 pb-2">
          <div className="row">
            {/* Section one */}
            <div className="col">
              <h1 className="study">Study</h1>
              <h1 className="lorem py-3">
                Lorem ipsum dolor sit amet
                <br /> consectetur adipisicing elit. <br />
                Dolorem repudiandae quisquam ullam, <br />
                molestias
              </h1>
            </div>
            {/* Section two */}
            <div className="col">
              <h1 className="nos-services pt-4">Nos services</h1>
              <div className="avis">
                Avis clients
                <br /> Mentions légales
                <br /> Plan du site
                <br /> Blog d’Idéematic <br />
                Le dictionnaire du digital <br />‹ Notre boutique /›
              </div>
            </div>
            {/* Section three */}
            <div className="col section-three">
              <h3 className="sign-up-header pt-4 ">
                Sign up for Special Offers!
              </h3>
              <div className="sign-up row">
                <input
                  type="text"
                  placeholder="Mail"
                  className="mail col-sm-8 col-md-8"
                />

                <button className="subscribe float-sm-end col-md-4">
                  Subscibe
                </button>
              </div>
            </div>
            {/* Section three sm screens */}
            <div className="sm-screen">
              <h3 className="sign-up-header pt-4 ">
                Sign up for Special Offers!
              </h3>
              <div className="sign-up ">
                <input
                  type="text"
                  placeholder="Mail"
                  className="mail col-sm-8 col-md-8"
                />
                <button className="subscribe-sm float-end px-5 py-2">
                  Subscibe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
