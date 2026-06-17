
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }





import Footer from "../Components/Footer";
import Header from "../Components/Header";

export const metadata = {
  metadataBase: new URL("https://www.traansboltenergy.com"),

  title: {
    default: "Traansbolt Energy",
    template: "%s | Traansbolt Energy",
  },

  description:
    "Integrated Battery Energy Storage Systems engineered for Commercial, Industrial and Utility Scale applications.",

  keywords: [
    "BESS",
    "Battery Energy Storage System",
    "Energy Storage",
    "Solar EPC",
    "Traansbolt Energy",
    "Utility Scale Energy Storage",
    "Commercial Energy Storage",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Traansbolt Energy",
    description:
      "Integrated Battery Energy Storage Systems engineered for Commercial, Industrial and Utility Scale applications.",
    url: "https://www.traansboltenergy.com",
    siteName: "Traansbolt Energy",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}