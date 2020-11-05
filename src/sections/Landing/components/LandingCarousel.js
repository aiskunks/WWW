import React from "react";

// import Slider component from react-slick
import Slider from "react-slick";
// import the stylesheet of react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LandingCarousel = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="page-section page-section--slider">
      <div className="slider">
        <Slider {...settings}>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/4XCEthZL68WWwIiyKMIkAM/c85b0c2dd6f64638fdd0160ae0c08ab0/announcement-2-v2.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>
                    AI Now Launches “Regulating Biometrics: Global Approaches
                    and Open Questions”
                  </h2>
                  <p>8 case studies on regulating biometrics</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Amid heightened public scrutiny, interest in regulating
                    biometric technologies has grown significantly in many parts
                    of the world.{" "}
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/announcements/ai-now-launches-regulating-biometrics-global-approaches-and-open-questions.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/gyHQlQhLe8sk6Qw6aieim/8a13f54f7a1483ac4e9cc426f00a6bf0/stephen-pedersen-229018-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>
                    AI Now submits comments to the European Commission on AI
                    policy
                  </h2>
                  <p></p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Amba Kak, Rashida Richardson, and Roel Dobbe submitted
                    comments to the European Commission's Whitepaper on AI
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ai-now-comments-to-eu-whitepaper-on-ai.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/1op8RPkCEwIui4COcEUY0y/7b082898ece707dc1eba31c008280a3c/angelo-pantazis-564148-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>
                    AI Now submits comments to the Australian Human Rights
                    Commission on AI and human rights
                  </h2>
                  <p></p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Kate Crawford, Amba Kak, and Jason Schultz submitted
                    comments to the Australian Human Rights Commission’s
                    extensive proposals on a human rights framework for
                    artificial intelligence.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ai-now-comments-to-the-australian-human-rights-commission.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/gyHQlQhLe8sk6Qw6aieim/8a13f54f7a1483ac4e9cc426f00a6bf0/stephen-pedersen-229018-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>
                    AI Now's comments to Canada’s Office of the Privacy
                    Commissioner on data privacy law and AI
                  </h2>
                  <p></p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Amba Kak and Rashida Richardson submitted comments to
                    Canada’s Office of the Privacy Commission responding to
                    proposals for ensuring appropriate regulation for artificial
                    intelligence.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ainow-comments-to-canadian-office-of-the-privacy-commissioner.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/qcVG2BEXYWQka8qaWgMIm/8569f9c7868e72144071e159598a420f/AIA_Report_Impage-final.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI Now’s Testimony to the European Parliament</h2>
                  <p>On the risks and harms of predictive policing</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now's Executive Director Andrea Nill Sánchez testified
                    before the European Parliament on the dangers of predictive
                    policing systems. Read the full testimony.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ainow-eu-parliament-libe-committee-written-testimony.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI Now’s Testimony to the House Oversight Committee</h2>
                  <p>A call to halt the use of facial recognition</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now’s Co-Founder Meredith Whittaker on the dangers of
                    Facial Recognition technology
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/oversight-committee-testimony-whittaker.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/gyHQlQhLe8sk6Qw6aieim/8a13f54f7a1483ac4e9cc426f00a6bf0/stephen-pedersen-229018-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>
                    AI Now submits Amicus Brief to the Supreme Court of
                    Pennsylvania
                  </h2>
                  <p></p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now submitted an amicus curiae brief in support of the
                    ACLU of Pennsylvania and in opposition of the Special
                    Master's recommendation for Philadelphia to develop and use
                    a pre-trial risk assessment to improve bail decisionmaking.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ai-now-amicus-brief-pa-supreme-court.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/5NUHvxd5oAoMoGki26ceUk/1acfee94b0c67480ab31f21208c594c9/nathan-anderson-moss-gradient.png)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Announcing AI Now’s Data Genesis Program</h2>
                  <p>Studying and demystifying training data</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    We are thrilled to announce the official launch of the Data
                    Genesis research program at the AI Now Institute at NYU.
                  </p>
                  <div className="link">
                    <a href="/announcements/announcing-ai-nows-data-genesis-program.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI Now's Testimony to the New York City Council</h2>
                  <p>
                    Written testimony to the New York City Council Committee on
                    Technology Oversight Hearing on Automated Decision Systems
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    On January 22, AI Now's Director of Policy Research, Rashida
                    Richardson, testified before the New York City Council's
                    Committee on Technology on the urgency to address and
                    regulate City agency use of Automated Decision Systems. Read
                    the full testimony here.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ainow-rashida-richardson-testimony-nycc-ads-disclosures.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI Now's Testimony to New York City Council</h2>
                  <p>
                    Written Testimony to the New York City Council on Creating
                    Comprehensive Reporting and Oversight of NYPD Surveillance
                    Technologies
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    On December 18th, Genevieve Fried, Technology Fellow at AI
                    Now, testified before the New York City Council on the need
                    for transparency around the existence and use of
                    surveillance technology by NYPD. Read the full written
                    testimony.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ainow-genevieve-fried-testimony-nycc-hearing-postact.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/3qwF3zSDdSQUCu6weCmaoM/15c765641ac949246b2b45476d328e64/research-header.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI Now 2019 Report</h2>
                  <p>Read our annual report</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Our 2019 Report examines new research on the risks and harms
                    of AI, including its use by companies to aggressively manage
                    and control workers, its climate impact, and the growing use
                    of facial and affect recognition. We also look at the
                    growing movements that are demanding a h...
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/AI_Now_2019_Report.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/5QunhpQRAkiE2UoWmaaysq/02cadcf7b630492c30d75a7ed1ed5ad6/index-header-v2.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Confronting Black Boxes</h2>
                  <p>
                    A Shadow Report of the New York City Automated Decision
                    System Task Force
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    In 2017, New York City became the first US jurisdiction to
                    create a task force to come up with recommendations for
                    government use of ADS. *Confronting Black Boxes* is a
                    community powered shadow report that provides a
                    comprehensive record of the Task Force’s community
                    engagemen...
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ads-shadowreport-2019.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/5mOxI2nJzqCScyqswcIyC0/e8d3d4be550911bf748c24bc20a487d5/matt-palmer-gradient.png)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI Now's Testimony to New York City Council</h2>
                  <p>
                    Written Testimony to the New York City Council on the use of
                    Electronic Health Records
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    On November 20th, Varoon Mathur, Tech Fellow at AI Now,
                    testified before the New York City Council on privacy and
                    security concerns on the use of Electronic Health Records.
                    Read the full written testimony.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ainow-varoon-mathur-testimony-nycc-hearing-on-ehr.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/3o1ggwz7Ju8K0oqQmcSGKs/ae53df729f645f7b56bcaaeeb31ad717/jaromir-kavan-211090-ot-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>The Apple Card Controversy</h2>
                  <p>
                    Algorithmic bias builds on long patterns of historical
                    discrimination. And the same communities are hit the hardest
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    The Apple Card set off an outcry over algorithmic
                    discrimination online – if only all claims of AI bias were
                    taken so seriously. Sarah Myers West examines the latest in
                    a string of examples that illustrate why AI doesn’t work for
                    everyone.
                  </p>
                  <div className="link">
                    <a href="https://medium.com/@AINowInstitute/in-the-outcry-over-the-apple-card-bias-is-a-feature-not-a-bug-532a4c75cc9f">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/gyHQlQhLe8sk6Qw6aieim/8a13f54f7a1483ac4e9cc426f00a6bf0/stephen-pedersen-229018-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Disability, Bias, and AI</h2>
                  <p>Read our latest report</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    While much AI bias research and reporting has focused on the
                    axes of race and gender, there has been much less attention
                    paid to disability. Our latest report, Disability, Bias, and
                    AI, draws from a wealth of research from disability
                    advocates and scholars, and examines what d...
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/disabilitybiasai-2019.html ">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/5uUJUe9Bv2KkmUiMYAIIgm/e82e2fee371aaae7fe84b9ee60acfd92/nycaa-announcement.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Comments to HUD Proposed Rule</h2>
                  <p>
                    Comments to HUD Proposed Rule on the Fair Housing Act's
                    Disparate Impact Standard
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now, NYU Law's Center on Race, Inequality, and the Law,
                    and other scholars submitted the following comments to the
                    US Department on Housing and Urban Development regarding its
                    proposed rule on the Fair Housing Act's disparate impact
                    standard and defense.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ainow-cril-october-2019-hud-comments.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/6V1xqV56qk68IeGGCuUAs/31bb7231a03763e1898f2362a9dd96ba/about-header.png)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Videos from the AI Now 2019 Symposium</h2>
                  <p>Watch now</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Videos from the AI Now 2019 Symposium: The Growing Pushback
                    Against Harmful AI are now live on our website and YouTube
                    channel.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/symposia/2019-symposium.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI and Climate Change</h2>
                  <p>How they’re connected and what we can do about it</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    While the tech industry claims to be “green,” tech’s climate
                    impact is significant and growing. AI Now's Roel Dobbe and
                    Meredith Whittaker review the role of AI and advanced
                    technology in climate change, and outline seven steps
                    policymakers can take to address their outsized i...
                  </p>
                  <div className="link">
                    <a href="https://medium.com/@AINowInstitute/ai-and-climate-change-how-theyre-connected-and-what-we-can-do-about-it-6aa8d0f5b32c">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/gyHQlQhLe8sk6Qw6aieim/8a13f54f7a1483ac4e9cc426f00a6bf0/stephen-pedersen-229018-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI in 2019: Year in Review</h2>
                  <p>
                    Opening remarks from our 2019 Symposium on the growing
                    pushback against harmful AI{" "}
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now Co-Founders Kate Crawford and Meredith Whittaker
                    kicked off our 2019 Symposium by recapping the critical
                    moments and people who defined a growing movement that is
                    pushing back against harmful AI technologies and systems.
                  </p>
                  <div className="link">
                    <a href="https://medium.com/@AINowInstitute/ai-in-2019-a-year-in-review-c1eba5107127">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Call for Postdoctoral Researchers</h2>
                  <p>Apply by November 19, 2019</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now is hiring postdoctoral researchers whose work
                    resonates with the Institute's mission. We welcome
                    applications across a range of interests and disciplines.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/join-us.html#postdoctoral-researcher">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>
                    AI Now and allies submit testimony to MA Joint Committee
                  </h2>
                  <p>Read the Testimony</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now with other researchers and organizations provided
                    testimony in support of Massachusetts Legislation,
                    S.1876/H.2701, which creates a Commission on government use
                    of automated decision-making and artificial intelligence
                    systems.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/ainow-et-al-ma-testimony-191001.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Litigating Algorithms 2019 U.S. Report</h2>
                  <p>
                    New Challenges to Government Use of Algorithmic Decision
                    Systems
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Following up on our 2018 report, Litigating Algorithms 2019
                    U.S. Report examines recent U.S. lawsuits brought against
                    government use of ADS, and how fighting these systems in the
                    court has helped mitigate some of the harm caused by these
                    systems.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/litigatingalgorithms-2019-us.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>How To Interview a Tech Company</h2>
                  <p>A Guide for Students</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Tech spends millions recruiting students, even as issues of
                    tech equity and ethics move to the center of public
                    discussion. To help ethically-minded students navigate
                    recruiting season, we drafted 10 questions they can use to
                    interview a tech company.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/how-to-interview-a-tech-company.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Announcing AI Now’s Executive Director</h2>
                  <p>Join us in welcoming Andrea Nill Sánchez</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    After an extensive search, we’re thrilled to share that
                    Andrea Nill Sánchez will join the AI Now Leadership Team as
                    Executive Director.
                  </p>
                  <div className="link">
                    <a href="/announcements/announcing-ai-nows-executive-director.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>Introducing the newest AI Now team members</h2>
                  <p>Welcoming our Director of Global Strategy and Programs</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    We’re thrilled to share that Amba Kak will join AI Now as
                    Director of Global Strategy and Programs. Meet Amba and
                    other members of our newly expanded team.
                  </p>
                  <div className="link">
                    <a href="/announcements/introducing-the-newest-ai-now-team-members.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/17EmOLHSOwmOA8e6WgwQa8/26deaade2bbff00632ac0feaebffb386/denys-nevozhai-185489-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>We’re Hiring an Editorial Lead</h2>
                  <p>Working across research, operations, and communications</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now is seeking a full-time Editorial Lead to work with AI
                    Now’s research team in developing reports, blog posts, and
                    other communications for public audiences.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/join-us.html#editorial-lead">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundimage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/1op8RPkCEwIui4COcEUY0y/7b082898ece707dc1eba31c008280a3c/angelo-pantazis-564148-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI Now 2019 Symposium</h2>
                  <p>Wednesday, October 2nd at 6pm at NYU’s Skirball Center</p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    Join us on October 2nd at the AI Now 2019 Symposium. This
                    year, we’re providing behind-the-scenes insights from those
                    at the frontlines of the growing pushback against harmful
                    AI. Tickets will become available on August 26th.
                  </p>
                  <div className="link">
                    <a href="https://symposium.ainowinstitute.org/">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/gyHQlQhLe8sk6Qw6aieim/8a13f54f7a1483ac4e9cc426f00a6bf0/stephen-pedersen-229018-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>We’re Hiring a Research Lead</h2>
                  <p>
                    Driving forward our work on Gender, Race, and Power in AI
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now is seeking a full-time Research Lead to design and
                    develop AI Now’s strategy and programs related to AI,
                    Gender, Race, and Power research.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/join-us.html#research-lead-gender-race-and-power-in-ai">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/gyHQlQhLe8sk6Qw6aieim/8a13f54f7a1483ac4e9cc426f00a6bf0/stephen-pedersen-229018-gradient.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>We’re Seeking an Executive Director </h2>
                  <p>Expanding AI Now’s Leadership Team </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    AI Now is seeking an Executive Director (ED) to join our
                    Leadership Team at this exciting moment in our
                    organization’s growth. The ED will have overall strategic
                    and operational responsibility for AI Now’s staff, programs,
                    funding, and execution of its mission.
                  </p>
                  <div className="link">
                    <a href="/announcements/ai-now-seeks-executive-director.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.ctfassets.net/8wprhhvnpfc0/4XCEthZL68WWwIiyKMIkAM/c85b0c2dd6f64638fdd0160ae0c08ab0/announcement-2-v2.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row">
              <div className="column small-12 large-6 medium-6">
                <div className="latest">
                  <h1>Latest</h1>
                </div>
                <div className="page-section--slider__info">
                  <h2>AI Now’s Testimony to US House Committee</h2>
                  <p>
                    Written Testimony to the US House Committee on Science,
                    Space, and Technology
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="page-section--slider__announcement">
                  <p>
                    On June 26th, Meredith Whittaker, Co-founder and Co-director
                    of AI Now, testified before the House Committee on Science,
                    Space and Technology on the societal and ethical
                    implications of AI. Read the full written testimony.
                  </p>
                  <div className="link">
                    <a href="https://ainowinstitute.org/062619-whittaker-house-testimony.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
