// import "../Styles/Home.css";


// export default function Home() {
//   return (
// <>
// <div className="main1_Energy_Home">
//   <div className="container1_Energy_Home">
//     <div className="row1_Energy_Home">
//       <div className="col1_Energy_Home">
//         <h5>Welcome to Transbolt Energy</h5>
//       </div>
//       <div className="col2_Energy_Home">
//       </div>
//     </div>
//   </div>
// </div>
// </>
//   );
// }




import "../Styles/Home.css";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <section className="hero_energy">
        <div className="hero_overlay"></div>

        <div className="container_energy hero_content">
          <div className="hero_text">
            <span className="hero_tag">
              TRAANSBOLT ENERGY
            </span>

            <h1>
              Intelligent Energy Storage
              <br />
              for a Resilient Tomorrow
            </h1>

            <p>
              From backup power and peak shaving to renewable integration and
              energy optimisation — Traansbolt Energy delivers scalable BESS
              solutions engineered for reliability, safety, and performance.
            </p>

            <div className="hero_buttons">
              <Link href="https://www.traansbolt.com/Contact" className="btn_primary">
                Talk to Our Experts →
              </Link>

              <button className="btn_secondary">
                Explore Our Products →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section_energy">
        <div className="container_energy">
          <div className="section_heading">
            <span>WHY INDUSTRIES ARE ADOPTING BESS</span>
            <h2>Powering Smarter Energy Decisions</h2>
          </div>

          <div className="benefits_grid">
            <div className="benefit_card">
              <span>⚡</span>
              <h3>Peak Shaving & Load Management</h3>
              <p>
                Discharge during expensive peak hours to cut demand charges by
                20–40%.
              </p>
            </div>

            <div className="benefit_card">
              <span>🔋</span>
              <h3>Reliable Backup Power</h3>
              <p>
                Seamless island-mode switchover in under 20 milliseconds.
              </p>
            </div>

            <div className="benefit_card">
              <span>☀️</span>
              <h3>Renewable Integration</h3>
              <p>
                Store surplus solar and wind power and deploy after sunset.
              </p>
            </div>

            <div className="benefit_card">
              <span>💰</span>
              <h3>Lower Energy Costs</h3>
              <p>
                Charge at low tariffs and discharge during expensive periods.
              </p>
            </div>

            <div className="benefit_card">
              <span>🏭</span>
              <h3>Energy Independence</h3>
              <p>
                Reduce grid dependency and eliminate diesel genset runtime.
              </p>
            </div>

            <div className="benefit_card">
              <span>🌿</span>
              <h3>Sustainability & ESG</h3>
              <p>
                Achieve measurable carbon reduction with verifiable reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="applications_section">
        <div className="container_energy">

          <div className="section_heading center">
            <span>OUR BESS PRODUCT PORTFOLIO</span>

            <h2>Ideal for a Wide Range of Industries</h2>

            <p>
              Every system we deploy is fully integrated — battery, BMS, PCS,
              EMS, thermal management, and fire suppression.
            </p>
          </div>

          <div className="applications_grid">

            <div className="app_card">
              <h3>Manufacturing</h3>
              <p>Cut demand costs and eliminate genset fuel spend.</p>
            </div>

            <div className="app_card">
              <h3>Data Centers</h3>
              <p>Battery backup in &lt;20 ms with peak shaving.</p>
            </div>

            <div className="app_card">
              <h3>Hospitality</h3>
              <p>Uninterrupted power with sustainable operations.</p>
            </div>

            <div className="app_card">
              <h3>Healthcare</h3>
              <p>Critical load prioritisation with multi-layer redundancy.</p>
            </div>

            <div className="app_card">
              <h3>Commercial Buildings</h3>
              <p>Demand management and EV charging integration.</p>
            </div>

            <div className="app_card">
              <h3>Utilities & Grid</h3>
              <p>Frequency regulation and renewable stabilization.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="stats_section">
        <div className="container_energy">
          <div className="stats_grid">

            <div className="stat_box">
              <h2>45 Years</h2>
              <p>Engineering Heritage</p>
            </div>

            <div className="stat_box">
              <h2>26.7%</h2>
              <p>Blended SITC Gross Margin</p>
            </div>

            <div className="stat_box">
              <h2>&lt;20 ms</h2>
              <p>Island-Mode Switchover</p>
            </div>

            <div className="stat_box">
              <h2>24–30 Mo.</h2>
              <p>Typical Payback Period</p>
            </div>

            <div className="stat_box">
              <h2>6000+</h2>
              <p>LFP Cycle Life</p>
            </div>

            <div className="stat_box">
              <h2>98.5%</h2>
              <p>PCS Efficiency</p>
            </div>

          </div>
        </div>
      </section>

      <section className="cta_section">
        <div className="container_energy cta_wrapper">

          <div className="cta_content">
            <h2>
              Ready to Transform Your Energy Infrastructure?
            </h2>

            <p>
              Let's build a smarter, cleaner, and more resilient future
              together.
            </p>

            <Link href="https://www.traansbolt.com/Contact" className="btn_primary">
              Talk to Our Experts →
            </Link>
          </div>

          <div className="cta_image">
            <img
              src="/Images/trans_BESS2.jpeg"
              alt="Traansbolt BESS"
            />
          </div>

        </div>
      </section>
    </>
  );
}
