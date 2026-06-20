


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

import { useState } from "react";



import "../../Styles/GetAQuate.css"
import Link from "next/link";





export default function GetAQuote() {


const [formData, setFormData] = useState({
  storageSize: "",
  duration: "",
  primaryUseCase: "",
  location: "",
  deliveryDate: "",
  projectDetails: "",

  firstName: "",
  lastName: "",
  title: "",
  phone: "",
  email: "",
  company: "",
  industry: "",

  referralSource: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Quote Submitted Successfully!");

      setFormData({
        storageSize: "",
        duration: "",
        primaryUseCase: "",
        location: "",
        deliveryDate: "",
        projectDetails: "",
        firstName: "",
        lastName: "",
        title: "",
        phone: "",
        email: "",
        company: "",
        industry: "",
        referralSource: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};


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



{/* <div className="quote-card quote-form-card"> */}
<form
  className="quote-card quote-form-card"
  onSubmit={handleSubmit}
>


  <h3>TELL US ABOUT YOUR PROJECT</h3>

  <div className="form-grid">

    <div className="form-group">
      <label>Size Of Storage (MW) *</label>
      {/* <input type="text" placeholder="0 MW" /> */}
      <input
  type="text"
  name="storageSize"
  value={formData.storageSize}
  onChange={handleChange}
  placeholder="0 MW"
/>
    </div>

    <div className="form-group">
      <label>Duration *</label>
      <input
  type="text"
  name="duration"
  value={formData.duration}
  onChange={handleChange}
  placeholder="0 MWh"
/>
    </div>

    <div className="form-group">
      <label>Primary Use Case *</label>


<select
  name="primaryUseCase"
  value={formData.primaryUseCase}
  onChange={handleChange}
>
  <option value="">Select One</option>
  <option value="Peak Shaving">Peak Shaving</option>
  <option value="Load Shifting">Load Shifting</option>
  <option value="Solar Integration">Solar Integration</option>
  <option value="Backup Power">Backup Power</option>
</select>

    </div>

    <div className="form-group full">
      <label>Location (city, state, utility co./ISO) *</label>
      <input
  type="text"
  name="location"
  value={formData.location}
  onChange={handleChange}
  placeholder="City, State, Utility Co./ISO"
/>
    </div>

    <div className="form-group">
      <label>Delivery Date *</label>
      <input
  type="date"
  name="deliveryDate"
  value={formData.deliveryDate}
  onChange={handleChange}
/>
    </div>

  </div>

  <div className="form-group full">
    <label>Details About Project:</label>
    <textarea
      rows="5"
      name="projectDetails"
      value={formData.projectDetails}
      onChange={handleChange}
      placeholder="Tell Us About Your Project..."
    ></textarea>
  </div>

  <h3 className="section-heading">YOUR CONTACT</h3>

  <div className="form-grid">

    <div className="form-group">
      <label>First Name *</label>
      <input
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleChange}
  placeholder="First Name"
/>
    </div>

    <div className="form-group">
      <label>Last Name *</label>
      <input
  type="text"
  name="lastName"
  value={formData.lastName}
  onChange={handleChange}
  placeholder="Last Name"
/>
    </div>

    <div className="form-group">
      <label>Title *</label>
      <input
  type="text"
  name="title"
  value={formData.title}
  onChange={handleChange}
  placeholder="Job Title"
/>
    </div>

    <div className="form-group">
      <label>Phone *</label>
      <input
  type="text"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+91 1234567890"
/>
    </div>

    <div className="form-group">
      <label>Email *</label>
      <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="name@example.com"
/>
    </div>

    <div className="form-group">
      <label>Company *</label>
      <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Company Name"
/>
    </div>

    <div className="form-group">
      <label>Industry *</label>
      <select
  name="industry"
  value={formData.industry}
  onChange={handleChange}
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
  value={formData.referralSource}
  onChange={handleChange}
>
      <option>None</option>
    </select>
  </div>

  {/* <button className="submit-btn">
    Get My Quote
  </button> */}

  <button
  type="submit"
  className="submit-btn"
>
  Get My Quote
</button>

</form>


{/* </form> */}
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}