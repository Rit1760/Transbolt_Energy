
import Link from "next/link";
import Image from "next/image";
import "../Styles/Header.css";

export default function Header() {
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
          {/* <Link href="https://www.traansbolt.com/About">About</Link> */}
          <Link href="/About">About</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Solutions">Solutions</Link>
          <Link href="/Products">Products</Link>
          <Link href="/GetAQuote">Get A Quote</Link>
        </nav>

        <div className="menuBtn">
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}