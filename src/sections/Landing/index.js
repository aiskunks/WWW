import React from "react";
import { Link } from "react-router-dom";

import { LandingFooter, LandingCarousel } from "./components";

export const Landing = () => {
  return (
    <>
      <header className="top-bar top-bar--no-logo">
        <span className="top-bar__button js-trigger-menu">menu</span>
        <nav className="main-menu js-target-menu main-menu--left">
          <div className="main-menu--left__close-menu">
            <i className="material-icons button">clear</i>
          </div>
          <Link to="/">Home</Link>
          <Link to="/people">People</Link>
        </nav>
      </header>
      <main role="main" className="index">
        <div
          className="top-section top-section--index"
          style={{
            backgroundImage:
              "url(https://images.ctfassets.net/8wprhhvnpfc0/5QunhpQRAkiE2UoWmaaysq/02cadcf7b630492c30d75a7ed1ed5ad6/index-header-v2.jpg)",
          }}
        >
          <div className="row expanded">
            <div className="column small-12 large-6">
              <div className="top-section--index__logo-container">
                <img
                  className=""
                  src="/images/ainow-logo-knockout.svg"
                  alt="NYU"
                />
                <p className="text-box">
                  A research institute examining the social implications of
                  artificial intelligence
                </p>
              </div>
            </div>
            <div className="column">
              <div className="top-section--index__nyu-logo">
                <img className="" src="/images/nyu-long.svg" alt="NYU" />
              </div>
            </div>
          </div>
          <div className="top-section--index__sticky js-target-sticky js-active">
            <div className="row expanded align-center">
              <div className="column small-12 medium-10">
                <i className="material-icons sticky__close js-close-sticky">
                  close
                </i>
                <p>
                  AI Now launches a new Report, “Regulating Biometrics: Global
                  Approaches and Urgent Questions.”{" "}
                  <a
                    href="https://ainowinstitute.org/announcements/ai-now-launches-regulating-biometrics-global-approaches-and-open-questions.html"
                    title="Regulating Biometrics Report"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-section page-section--about">
          <div className="row expanded">
            <div className="column large-8 small-12">
              <p className="page-section--about__text">
                The AI Now Institute at New York University is an
                interdisciplinary research center dedicated to understanding the
                social implications of artificial intelligence. Our work focuses
                on four core domains:
              </p>
            </div>
          </div>
        </div>
        <div className="page-section page-section--cards">
          <div className="row expanded">
            <div className="column large-3 small-12">
              <div className="page-section--cards__card-container">
                <div className="page-section--cards__card">
                  <p className="title">Rights & Liberties</p>
                </div>
                <div
                  className="page-section--cards__card no-show"
                  id="card-overlay"
                >
                  <div className="o-container">
                    <p className="o-title">Rights & Liberties</p>
                  </div>
                  <p className="o-description">
                    As artificial intelligence and related technologies are used
                    to make determinations and predictions in high stakes
                    domains such as criminal justice, law enforcement, housing,
                    hiring, and education, they have the potential to impact
                    basic rights and liberties in profound ways. AI Now is
                    partnering with the ACLU and other stakeholders to better
                    understand and address these impacts.
                  </p>
                </div>
              </div>
            </div>
            <div className="column large-3 small-12">
              <div className="page-section--cards__card-container">
                <div className="page-section--cards__card">
                  <p className="title">Labor & Automation</p>
                </div>
                <div
                  className="page-section--cards__card no-show"
                  id="card-overlay"
                >
                  <div className="o-container">
                    <p className="o-title">Labor & Automation</p>
                  </div>
                  <p className="o-description">
                    Automation and early-stage artificial intelligence systems
                    are already changing the nature of employment and working
                    conditions in multiple sectors. AI Now works with social
                    scientists, economists, labor organizers, and others to
                    better understand AI's implications for labor and work –
                    examining who benefits and who bears the cost of these rapid
                    changes.
                  </p>
                </div>
              </div>
            </div>
            <div className="column large-3 small-12">
              <div className="page-section--cards__card-container">
                <div className="page-section--cards__card">
                  <p className="title">Bias & Inclusion</p>
                </div>
                <div
                  className="page-section--cards__card no-show"
                  id="card-overlay"
                >
                  <div className="o-container">
                    <p className="o-title">Bias & Inclusion</p>
                  </div>
                  <p className="o-description">
                    Data reflects the social, historical and political
                    conditions in which it was created. Artificial intelligence
                    systems ‘learn’ based on the data they are given. This,
                    along with many other factors, can lead to biased,
                    inaccurate, and unfair outcomes. AI Now researches issues of
                    fairness, looking at how bias is defined and by whom, and
                    the different impacts of AI and related technologies on
                    diverse populations.
                  </p>
                </div>
              </div>
            </div>
            <div className="column large-3 small-12">
              <div className="page-section--cards__card-container">
                <div className="page-section--cards__card">
                  <p className="title">Safety & Critical Infrastructure</p>
                </div>
                <div
                  className="page-section--cards__card no-show"
                  id="card-overlay"
                >
                  <div className="o-container">
                    <p className="o-title">Safety & Critical Infrastructure</p>
                  </div>
                  <p className="o-description">
                    As artificial intelligence systems are introduced into our
                    core infrastructures, from hospitals to the power grid, the
                    risks posed by errors and blind spots increase. AI Now
                    studies the ways in which AI and related technologies are
                    being applied within these domains and aims to understand
                    possibilities for safe and responsible AI integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-section page-section--cards-sm">
          <div className="row ">
            <div className="column medium-12 small-12">
              <div className="page-section--cards-sm__card">
                <h4>Rights & Liberties</h4>
                <p>
                  As artificial intelligence and related technologies are used
                  to make determinations and predictions in high stakes domains
                  such as criminal justice, law enforcement, housing, hiring,
                  and education, they have the potential to impact basic rights
                  and liberties in profound ways. AI Now is partnering with the
                  ACLU and other stakeholders to better understand and address
                  these impacts.
                </p>
              </div>
            </div>
            <div className="column medium-12 small-12">
              <div className="page-section--cards-sm__card">
                <h4>Labor & Automation</h4>
                <p>
                  Automation and early-stage artificial intelligence systems are
                  already changing the nature of employment and working
                  conditions in multiple sectors. AI Now works with social
                  scientists, economists, labor organizers, and others to better
                  understand AI's implications for labor and work – examining
                  who benefits and who bears the cost of these rapid changes.
                </p>
              </div>
            </div>
            <div className="column medium-12 small-12">
              <div className="page-section--cards-sm__card">
                <h4>Bias & Inclusion</h4>
                <p>
                  Data reflects the social, historical and political conditions
                  in which it was created. Artificial intelligence systems
                  ‘learn’ based on the data they are given. This, along with
                  many other factors, can lead to biased, inaccurate, and unfair
                  outcomes. AI Now researches issues of fairness, looking at how
                  bias is defined and by whom, and the different impacts of AI
                  and related technologies on diverse populations.
                </p>
              </div>
            </div>
            <div className="column medium-12 small-12">
              <div className="page-section--cards-sm__card">
                <h4>Safety & Critical Infrastructure</h4>
                <p>
                  As artificial intelligence systems are introduced into our
                  core infrastructures, from hospitals to the power grid, the
                  risks posed by errors and blind spots increase. AI Now studies
                  the ways in which AI and related technologies are being
                  applied within these domains and aims to understand
                  possibilities for safe and responsible AI integration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <LandingCarousel />
        <div></div>
        <div className="page-section page-section--subscribe">
          <div className="row expanded">
            <div className="column large-7">
              <p>
                We're new, but our work is underway. Sign up for our mailing
                list and follow us on Twitter to stay in touch.
              </p>
              <form
                className="subscribe-form"
                action="//artificialintelligencenow.us15.list-manage.com/subscribe/post?u=80bf38b2893dd9bf46ea78f54&amp;id=581a2ce967"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div className="row ">
                  <div className="large-6 medium-6 small-12 column">
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      placeholder="Enter your email address"
                    />
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_80bf38b2893dd9bf46ea78f54_581a2ce967"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="large-6 medium-6 small-12 column subscribe-btn">
                    <button
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id=""
                      className="button"
                    >
                      subscribe
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="large-12 medium-12 small-12 column">
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="twitter">
                <a
                  href="https://twitter.com/ainowinstitute"
                  className=""
                  target="_blank"
                >
                  <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>{" "}
                  @AINowInstitute
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
      <div id="overlay" className="js-overlay"></div>
    </>
  );
};
