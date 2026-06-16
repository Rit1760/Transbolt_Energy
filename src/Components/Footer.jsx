// import "../Styles/Footer.css";


// export default function Footer() {
//   return (
//     <>
//     <div className="container1_Energy_Footer">
//       <div className="row1_Energy_Footer">
//         <div className="col1_Energy_Footer">
//           <h5>© 2024 Traansbolt Energy. All rights reserved.</h5>
//         </div>
//         <div className="col2_Energy_Footer">
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }





import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">

        {/* Company */}
        <div className="footer_column">
          <h2 className="footer_logo">TRAANSBOLT ENERGY</h2>
          <p className="footer_tagline">
            Intelligent Energy Storage for a Resilient Tomorrow
          </p>

          <p className="footer_desc">
            India's trusted C&I BESS integrator delivering reliable energy
            storage solutions for industries, commercial facilities, and
            renewable energy projects.
          </p>

          <div className="footer_socials">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        {/* Products */}
        <div className="footer_column">
          <h3>Products</h3>
          <ul>
            <li><a href="#">T125KW / 261KWH</a></li>
            <li><a href="#">1MW / 2MWh System</a></li>
            <li><a href="#">2.5MW / 5MWh System</a></li>
            <li><a href="#">Custom Solutions</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer_column">
          <h3>Solutions</h3>
          <ul>
            <li><a href="#">Peak Demand Management</a></li>
            <li><a href="#">Solar + Storage</a></li>
            <li><a href="#">Backup Power</a></li>
            <li><a href="#">EV Charging</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer_column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer_column">
          <h3>Get In Touch</h3>

          <p>
            Spaze iTech Park, 870-B1 <br />
            Gurugram, Haryana 122001
          </p>

          <a href="tel:+919971237771">
            +91 99712 37771
          </a>

          <a href="mailto:info@traansbolt-energy.com">
            info@traansbolt-energy.com
          </a>

          {/* <button className="footer_btn">
            Get Free Consultation
          </button> */}
        </div>

      </div>

      <div className="footer_bottom">
        <div className="footer_bottom_links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>

        <p>
          © 2026 Traansbolt Energy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}