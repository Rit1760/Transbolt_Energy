
// import Link from "next/link";
// import Image from "next/image";
// import "../Styles/Header.css";

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="navbar">

//         <div className="logo">
//           <Link href="/">
//             <Image
//               src="/Images/T_Energ.png"
//               alt="Transbolt Energy"
//               width={250}
//               height={80}
//               priority
//             />
//           </Link>
//         </div>


//         <nav className="navLinks">
//           <Link href="/">Home</Link>
//           <Link href="/About">About</Link>
//           <Link href="/Blog">Blog</Link>
//           <Link href="/Solutions">Solutions</Link>
//           <Link href="/Products">Products</Link>
//           <Link href="/GetAQuote">Get A Quote</Link>
//         </nav>

//         <div className="menuBtn">
//           <span></span>
//           <span></span>
//         </div>

//       </div>
//     </header>
//   );
// }






"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../Styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="navbar">

        <div className="logo">
          <Link href="/">
            <Image
              src="/Images/T_Energ.png"
              alt="Transbolt Energy"
              width={250}
              height={80}
              priority
            />
          </Link>
        </div>

        <nav className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Solutions">Solutions</Link>
          <Link href="/Products">Products</Link>
          <Link href="/GetAQuote">Get A Quote</Link>
        </nav>

        <div
          className="menuBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </div>

      </div>

      <div className={`mobileMenu ${menuOpen ? "active" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/About" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/Blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link href="/Solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
        <Link href="/Products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link href="/GetAQuote" onClick={() => setMenuOpen(false)}>Get A Quote</Link>
      </div>

    </header>
  );
}