// import "../../Styles/Products.css";

// const products = [
//   {
//     title: "T125KW / 261KWH",
//     category: "Commercial & Industrial BESS",
//     description:
//       "All-in-One integrated energy storage system designed for commercial and industrial facilities with plug-and-play deployment.",
//     stats: [
//       "261 kWh Capacity",
//       "125 kW Output",
//       "6000+ Cycles",
//       "IP55 Protection",
//     ],
//   },
//   {
//     title: "1MW / 2MWh",
//     category: "Containerised Large C&I BESS",
//     description:
//       "Fully containerised energy storage solution delivering utility-class performance for large commercial and industrial applications.",
//     stats: [
//       "2090 kWh Capacity",
//       "1000 kW Power",
//       "98.5% Efficiency",
//       "<20ms Switchover",
//     ],
//   },
//   {
//     title: "2.5MW / 5MWh",
//     category: "Utility Scale Flagship BESS",
//     description:
//       "Grid-scale liquid cooled storage solution engineered for renewable integration, frequency regulation, and utility applications.",
//     stats: [
//       "5.01 MWh Capacity",
//       "2.5 MW Power",
//       ">93% Efficiency",
//       "Seismic Level 8",
//     ],
//   },
//   {
//     title: "Custom Solutions",
//     category: "Bespoke BESS Systems",
//     description:
//       "Engineered energy storage solutions tailored to your load profile, infrastructure, and commercial objectives.",
//     stats: [
//       "100kWh - 50MWh+",
//       "Multi Container",
//       "Custom EMS",
//       "Flexible Financing",
//     ],
//   },
// ];

// const components = [
//   "Battery Management System (BMS)",
//   "Energy Management System (EMS)",
//   "Power Conversion System (PCS)",
//   "Liquid Cooling System",
//   "Stat-X Fire Suppression",
//   "TraansboltConnect™ Monitoring",
//   "SCADA Integration",
// ];

// export default function Products() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="productsHero">
//         <div className="overlay"></div>

//         <div className="heroContent">
//           <span className="heroTag">
//             OUR BESS PRODUCT PORTFOLIO
//           </span>

//           <h1>
//             Engineered Storage Solutions
//             <span> Built for Every Scale of Ambition</span>
//           </h1>

//           <p>
//             Every Traansbolt Energy system is a fully integrated solution —
//             battery, BMS, PCS, EMS, thermal management and fire suppression,
//             designed and supported by our engineering team from day one.
//           </p>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="productsSection">
//         <div className="sectionHeader">
//           <h2>BESS Hardware Products</h2>
//           <p>
//             Containerised LiFePO4 Energy Storage Systems from
//             Commercial Scale to Utility Scale.
//           </p>
//         </div>

//         <div className="productGrid">
//           {products.map((item, index) => (
//             <div className="productCard" key={index}>
//               <span className="productCategory">
//                 {item.category}
//               </span>

//               <h3>{item.title}</h3>

//               <p>{item.description}</p>

//               <div className="statsGrid">
//                 {item.stats.map((stat, i) => (
//                   <div key={i} className="statItem">
//                     {stat}
//                   </div>
//                 ))}
//               </div>

//               <button>Learn More</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Technology Stack */}
//       <section className="technologySection">
//         <div className="sectionHeader">
//           <h2>Technology Stack</h2>
//           <p>
//             The integrated technology inside every Traansbolt Energy
//             deployment.
//           </p>
//         </div>

//         <div className="componentGrid">
//           {components.map((item, index) => (
//             <div className="componentCard" key={index}>
//               <h4>{item}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="productsCTA">
//         <div className="ctaBox">
//           <h2>
//             Not Sure Which System Is Right For Your Facility?
//           </h2>

//           <p>
//             Our engineers analyse your load profile, tariff structure and
//             operational requirements to recommend the ideal Battery Energy
//             Storage System with a complete financial model.
//           </p>

//           <button>Get Free Energy Assessment</button>
//         </div>
//       </section>
//     </>
//   );
// }






import "../../Styles/Products.css";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/Images/P1.png",
    category: "C&I BESS",
    title: "T125KW / 261KWH",
    desc: "All-in-One Commercial & Industrial Battery Energy Storage System.",
    specs: [
      "261 kWh Capacity",
      "125 kW Output",
      "6000+ Cycles",
      "IP55 Protection",
    ],
  },

  {
    id: 2,
    image: "/Images/P2.png",
    category: "Large C&I",
    title: "1MW / 2MWh System",
    desc: "Containerised Large Scale Energy Storage Solution.",
    specs: [
      "2090 kWh",
      "1000 kW Power",
      "98.5% Efficiency",
      "<20ms Switchover",
    ],
  },

  {
    id: 3,
    image: "/Images/P3.png",
    category: "Utility Scale",
    title: "2.5MW / 5MWh System",
    desc: "Flagship Utility Scale Energy Storage Platform.",
    specs: [
      "5.01 MWh",
      "2.5 MW Power",
      ">93% Efficiency",
      "Level 8 Seismic",
    ],
  },

  {
    id: 4,
    image: "/Images/P4.png",
    category: "Custom Solutions",
    title: "Custom BESS",
    desc: "Tailor-made Battery Energy Storage Systems for any project size.",
    specs: [
      "100kWh-50MWh+",
      "Custom EMS",
      "Multi Container",
      "Scalable",
    ],
  },
];

export default function Products() {
  return (
    <>
      <section className="productsHero">
        <div className="heroOverlay"></div>

        <div className="heroContent">
          <span>OUR BESS PRODUCT PORTFOLIO</span>

          <h1>
            Engineered Storage Solutions
            <br />
            Built For Every Scale
          </h1>

          <p>
            Integrated Battery Energy Storage Systems engineered for
            Commercial, Industrial and Utility Scale applications.
          </p>
        </div>
      </section>

      <section className="productsSection">
        <div className="sectionTitle">
          <h2>Battery Energy Storage Systems</h2>
          <p>
            Explore Traansbolt Energy's complete range of integrated
            Battery Energy Storage Systems.
          </p>
        </div>

        {products.map((product, index) => (
          <div
            key={product.id}
            className={`productRow ${
              index % 2 === 1 ? "reverse" : ""
            }`}
          >
            {/* <div className="productImage">
              <img src={product.image} alt={product.title} />
            </div> */}

            <div className="productImage">
  <Image
    src={product.image}
    alt={product.title}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="productImg"
  />
</div>

            <div className="productInfo">
              <span className="category">
                {product.category}
              </span>

              <h2>{product.title}</h2>

              <p>{product.desc}</p>

              <div className="specGrid">
                {product.specs.map((spec, i) => (
                  <div key={i} className="specCard">
                    {spec}
                  </div>
                ))}
              </div>

              <button>
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
