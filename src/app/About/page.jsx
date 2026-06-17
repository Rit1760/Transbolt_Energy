
// export default function About() {
//   return (
// <>
// <div className="main1_Energy_About">
//   <div className="container1_Energy_About">
//     <div className="row1_Energy_About">
//       <div className="col1_Energy_About">
//         <h5>About Transbolt Energy</h5>
//       </div>
//       <div className="col2_Energy_About">
//       </div>
//     </div>
//   </div>
// </div>
// </>
//   );
// }




import Image from "next/image";
import "../../Styles/About.css";

export default function AboutUs() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-overlay">
          <span className="tagline">
            INDIA'S MOST TRUSTED BESS PARTNER
          </span>

          <h1>
            We Didn't Enter Energy Storage.
            <br />
            We Arrived Here.
          </h1>

          <p>
            Backed by 45+ years of electrical safety leadership,
            Traansbolt Energy brings world-class Battery Energy Storage
            Systems (BESS) engineered for reliability, safety, and
            long-term performance.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="about-company">
        <div className="container">

          <div className="section-header">
            <span>WHO WE ARE</span>
            <h2>About Traansbolt &<br /> Traansbolt Energy</h2>
          </div>

          <div className="content-grid">

            <div className="content-text">
              <p>
                <strong>Traansbolt</strong> is the trade name of Blitzshield
                Safety Solutions Pvt. Ltd. — India's first comprehensive
                protection company, headquartered in Gurugram, Haryana.
                For over four decades, we have been protecting India's people,
                places, and infrastructure through earthing systems,
                lightning protection, surge protection, solar EPC,
                and fire safety solutions.
              </p>

              <p>
                Our NIVARAK system holds the distinction of being India's
                first UL-Certified Lightning Prevention System.
              </p>

              <p>
                Traansbolt Energy is our energy vertical — built not as a
                pivot, but as a natural evolution of everything we have
                always done. The same engineering discipline that protects
                a building from a lightning strike now protects a facility
                from energy cost volatility, grid failure, and renewable
                intermittency.
              </p>

              <p>
                We entered the C&I BESS market deliberately — spending years
                building the technical depth and field expertise before
                deploying our first system.
              </p>

              <p>
                Every product we offer is engineered to IEC 62619,
                UL 9540A, and NFPA 855 standards. Our systems span
                125 kW to 5 MW, covering every major C&I application
                from peak shaving and backup power to solar integration
                and grid-scale renewable support.
              </p>
            </div>

            <div className="about-highlight-card">
              <h3>45+ Years</h3>
              <p>Electrical Safety Excellence</p>

              <h3>125 kW – 5 MW</h3>
              <p>BESS Deployment Range</p>

              <h3>UL Certified</h3>
              <p>NIVARAK Lightning Prevention System</p>

              <h3>100%</h3>
              <p>Focus on Safety & Reliability</p>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="container">

          <div className="section-header center">
            <span>LEADERSHIP</span>
            <h2>Meet Our Founder & CEO</h2>
          </div>

          <div className="leader-card">

            <div className="leader-image">
              <Image
                src="/Images/brijesh1.jpg"
                alt="Brijesh Malik"
              />
            </div>

            <div className="leader-content">

              <h2>Brijesh Malik</h2>

              <h4>
                Founder & CEO
              </h4>

              <div className="leader-tag">
                45 years building India's electrical safety
                infrastructure. Now building its energy future.
              </div>

              <p>
                Brijesh Malik founded Blitzshield Safety Solutions with a
                conviction that India's electrical infrastructure deserved
                the same standard of protection as the world's most
                advanced markets.
              </p>

              <p>
                Over four decades, he built one of India's most respected
                names in earthing, lightning protection, and over-voltage
                safety — earning certifications, installations, and client
                relationships that most companies in this space never achieve.
              </p>

              <p>
                He does not come from the energy storage industry.
                He comes from something more valuable: a career spent
                understanding how electrical systems fail, how to design
                them so they don't, and how to earn the trust of clients
                who cannot afford to get it wrong.
              </p>

              <p>
                As CEO of Traansbolt Energy, Brijesh brings that same
                standard to every BESS system we deploy. He is personally
                involved in every significant client relationship and
                every major engineering decision.
              </p>

              <p>
                In 2026, Brijesh was invited as a speaker at India Energy
                Storage Week — one of the most credentialled platforms in
                the country's energy storage industry.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="vision-section">
        <div className="container">

          <div className="vision-card">
            <h2>Our Vision</h2>

            <p>
              To become India's most trusted energy storage partner by
              combining decades of electrical protection expertise with
              next-generation energy technologies.
            </p>
          </div>

          <div className="vision-card">
            <h2>Our Mission</h2>

            <p>
              Deliver safe, reliable, and high-performance Battery Energy
              Storage Systems that help industries reduce costs, improve
              resilience, and accelerate the transition to clean energy.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

