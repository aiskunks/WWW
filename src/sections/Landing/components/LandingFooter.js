import React from "react";
import { Link } from "react-router-dom";

export const LandingFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="row medium-unstack expanded">
          <div className="footer__content footer--sections medium-3 small-12 large-3 column">
            <h2>Sections</h2>
            <nav className="footer__nav">
              <Link to="/">Home</Link>
              <Link to="/people">People</Link>
            </nav>
          </div>
          <div className="footer__content medium-6 small-12 large-6 column">
            <p>
              A research institute examining the social implications of
              artificial intelligence
            </p>
            <div className="call-to-action">
              <a
                href="https://twitter.com/ainowinstitute"
                className="custom-icon custom-icon--twitter"
                target="_blank"
              ></a>
              <a
                href="https://www.youtube.com/AINowInstitute"
                className="custom-icon custom-icon--youtube"
                target="_blank"
              ></a>
              <a
                href="https://medium.com/@AINowinstitute"
                className="custom-icon custom-icon--medium"
                target="_blank"
              ></a>
            </div>
          </div>
          <div className="footer__content medium-4 small-12 large-3 column">
            <div className="" style={{ textAlign: "center" }}>
              <img
                className="footer__partner-logo"
                src="/images/ainow-logo-outlines.svg"
                alt="AINow"
              />
              <img
                className="footer__partner-logo footer__partner-logo--nyu"
                src="/images/nyu-short.svg"
                alt="NYU"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <div className="row align-center">
          <div className="large-2">
            <a
              rel="license"
              href="https://creativecommons.org/licenses/by-nd/4.0/"
            >
              <img
                className="copyright__cc-badge"
                alt="Creative Commons License"
                src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nd.svg"
              />
            </a>
          </div>
          <div className="large-10">
            <p>
              This work is licensed under a{" "}
              <a
                rel="license"
                href="https://creativecommons.org/licenses/by-nd/4.0/"
              >
                Creative Commons Attribution-NoDerivatives 4.0 International
                License
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
