


// import "../../Styles/GetAQuate.css"
// import Link from "next/link";

// export default function GetAQuote() {
//   return (
//     <>
//       <section className="main1_Energy_GetAQuote">
//         <div className="container1_Energy_GetAQuote">
//           <div className="row1_Energy_GetAQuote">
//             <div className="col1_Energy_GetAQuote">
//               <span className="quote-tag">⚡ Traansbolt Energy</span>

//               <h1>
//                 Get Your <span>Personalised BESS Quote</span>
//               </h1>

//               <p>
//                 Tell us about your facility and receive a customised Battery
//                 Energy Storage System (BESS) recommendation with pricing,
//                 expected savings, ROI analysis, and implementation guidance.
//               </p>

//               <div className="quote-features">
//                 <div className="feature-item">
//                   <span>✓</span> 45+ Years Engineering Heritage
//                 </div>

//                 <div className="feature-item">
//                   <span>✓</span> Data-Driven Recommendations
//                 </div>

//                 <div className="feature-item">
//                   <span>✓</span> Transparent Pricing
//                 </div>

//                 <div className="feature-item">
//                   <span>✓</span> No-Obligation Quote
//                 </div>
//               </div>

//               <Link href="https://www.traansbolt.com/Contact" className="quote-btn">
//                 Get Your Custom Quote →
//               </Link>
//             </div>

//             <div className="col2_Energy_GetAQuote">
//               <div className="quote-card">
//                 <h3>Why Request a Quote?</h3>

//                 <div className="card-item">
//                   <h4>Annual Savings</h4>
//                   <p>Discover potential energy cost reductions.</p>
//                 </div>

//                 <div className="card-item">
//                   <h4>ROI Analysis</h4>
//                   <p>Understand payback period and long-term value.</p>
//                 </div>

//                 <div className="card-item">
//                   <h4>Custom Design</h4>
//                   <p>Tailored BESS sizing for your facility.</p>
//                 </div>

//                 <div className="card-item">
//                   <h4>Expert Consultation</h4>
//                   <p>Guidance from experienced energy specialists.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }





"use client";

import "../../Styles/GetAQuate.css"
import Link from "next/link";


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

              <Link href="https://www.traansbolt.com/Contact" className="quote-btn">
                Get Your Custom Quote →
              </Link>
            </div>

            <div className="col2_Energy_GetAQuote">



<div className="quote-card quote-form-card">



  <h3>TELL US ABOUT YOUR PROJECT</h3>

  <div className="form-grid">

    <div className="form-group">
      <label>Size Of Storage (MW) *</label>
      <input type="text" placeholder="0 MW" />

    </div>

    <div className="form-group">
      <label>Duration *</label>

      <input
  type="text"
  placeholder="0 MWh"
/>
    </div>

    <div className="form-group">
      <label>Primary Use Case *</label>


<select
  name="primaryUseCase"
>
  <option >Select One</option>
  <option>Peak Shaving</option>
  <option >Load Shifting</option>
  <option >Solar Integration</option>
  <option >Backup Power</option>
</select>

    </div>

    <div className="form-group full">
      <label>Location (city, state, utility co./ISO) *</label>
      <input
  type="text"
  placeholder="City, State, Utility Co./ISO"
/>
    </div>

    <div className="form-group">
      <label>Delivery Date *</label>
      <input
  type="date"
/>
    </div>

  </div>

  <div className="form-group full">
    <label>Details About Project:</label>
    <textarea
      rows="5"
      placeholder="Tell Us About Your Project..."
    ></textarea>
  </div>

  <h3 className="section-heading">YOUR CONTACT</h3>

  <div className="form-grid">

    <div className="form-group">
      <label>First Name *</label>
      <input
  type="text"
  placeholder="First Name"
/>
    </div>

    <div className="form-group">
      <label>Last Name *</label>
      <input
  type="text"
  placeholder="Last Name"
/>
    </div>

    <div className="form-group">
      <label>Title *</label>
      <input
  type="text"
  placeholder="Job Title"
/>
    </div>

    <div className="form-group">
      <label>Phone *</label>
      <input
  type="text"
  placeholder="+91 1234567890"
/>
    </div>

    <div className="form-group">
      <label>Email *</label>
      <input
  type="email"
  placeholder="name@example.com"
/>
    </div>

    <div className="form-group">
      <label>Company *</label>
      <input
  type="text"
  placeholder="Company Name"
/>
    </div>

    <div className="form-group">
      <label>Industry *</label>
      <select
  name="industry"
>
        <option>Select your Industry</option>
      </select>
    </div>

  </div>

  <h3 className="section-heading">
    HOW DID YOU HEAR ABOUT US?
  </h3>

  <div className="form-group full">
    <label>Referral Source</label>
    <select
  name="referralSource"
>
      <option>None</option>
    </select>
  </div>

  <button className="submit-btn">
    Get My Quote
  </button>

            </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}