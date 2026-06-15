// import "../../Styles/GetAQuate.css"


// export default function GetAQuote() {
//   return (
// <>
// <div className="main1_Energy_GetAQuote">
//   <div className="container1_Energy_GetAQuote">
//     <div className="row1_Energy_GetAQuote">
//       <div className="col1_Energy_GetAQuote">
//         <h5>Get a Quote</h5>
//       </div>
//       <div className="col2_Energy_GetAQuote">
//       </div>
//     </div>
//   </div>
// </div>
// </>
//   );
// }






import "../../Styles/GetAQuate.css"

export default function GetAQuote() {
  return (
    <>
      <section className="main1_Energy_GetAQuote">
        <div className="container1_Energy_GetAQuote">
          <div className="row1_Energy_GetAQuote">
            <div className="col1_Energy_GetAQuote">
              <span className="quote-tag">⚡ Traansbolt Energy</span>

              <h1>
                Get Your <span>Personalised BESS Quote</span>
              </h1>

              <p>
                Tell us about your facility and receive a customised Battery
                Energy Storage System (BESS) recommendation with pricing,
                expected savings, ROI analysis, and implementation guidance.
              </p>

              <div className="quote-features">
                <div className="feature-item">
                  <span>✓</span> 45+ Years Engineering Heritage
                </div>

                <div className="feature-item">
                  <span>✓</span> Data-Driven Recommendations
                </div>

                <div className="feature-item">
                  <span>✓</span> Transparent Pricing
                </div>

                <div className="feature-item">
                  <span>✓</span> No-Obligation Quote
                </div>
              </div>

              <button className="quote-btn">
                Get Your Custom Quote →
              </button>
            </div>

            <div className="col2_Energy_GetAQuote">
              <div className="quote-card">
                <h3>Why Request a Quote?</h3>

                <div className="card-item">
                  <h4>Annual Savings</h4>
                  <p>Discover potential energy cost reductions.</p>
                </div>

                <div className="card-item">
                  <h4>ROI Analysis</h4>
                  <p>Understand payback period and long-term value.</p>
                </div>

                <div className="card-item">
                  <h4>Custom Design</h4>
                  <p>Tailored BESS sizing for your facility.</p>
                </div>

                <div className="card-item">
                  <h4>Expert Consultation</h4>
                  <p>Guidance from experienced energy specialists.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}