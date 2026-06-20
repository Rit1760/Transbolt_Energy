



// import "../../Styles/Products.css";
// import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     image: "/Images/P1.png",
//     category: "C&I BESS",
//     title: "T125KW / 261KWH",
//     desc: "All-in-One Commercial & Industrial Battery Energy Storage System.",
//     specs: [
//       "261 kWh Capacity",
//       "125 kW Output",
//       "6000+ Cycles",
//       "IP55 Protection",
//     ],
//   },

//   {
//     id: 2,
//     image: "/Images/P2.png",
//     category: "Large C&I",
//     title: "1MW / 2MWh System",
//     desc: "Containerised Large Scale Energy Storage Solution.",
//     specs: [
//       "2090 kWh",
//       "1000 kW Power",
//       "98.5% Efficiency",
//       "<20ms Switchover",
//     ],
//   },

//   {
//     id: 3,
//     image: "/Images/P3.png",
//     category: "Utility Scale",
//     title: "2.5MW / 5MWh System",
//     desc: "Flagship Utility Scale Energy Storage Platform.",
//     specs: [
//       "5.01 MWh",
//       "2.5 MW Power",
//       ">93% Efficiency",
//       "Level 8 Seismic",
//     ],
//   },

//   {
//     id: 4,
//     image: "/Images/P4.png",
//     category: "Custom Solutions",
//     title: "Custom BESS",
//     desc: "Tailor-made Battery Energy Storage Systems for any project size.",
//     specs: [
//       "100kWh-50MWh+",
//       "Custom EMS",
//       "Multi Container",
//       "Scalable",
//     ],
//   },
// ];

// export default function Products() {
//   return (
//     <>
//       <section className="productsHero">
//         <div className="heroOverlay"></div>

//         <div className="heroContent">
//           <span>OUR BESS PRODUCT PORTFOLIO</span>

//           <h1>
//             Engineered Storage Solutions
//             <br />
//             Built For Every Scale
//           </h1>

//           <p>
//             Integrated Battery Energy Storage Systems engineered for
//             Commercial, Industrial and Utility Scale applications.
//           </p>
//         </div>
//       </section>

//       <section className="productsSection">
//         <div className="sectionTitle">
//           <h2>Battery Energy Storage Systems</h2>
//           <p>
//             Explore Traansbolt Energy's complete range of integrated
//             Battery Energy Storage Systems.
//           </p>
//         </div>

//         {products.map((product, index) => (
//           <div
//             key={product.id}
//             className={`productRow ${
//               index % 2 === 1 ? "reverse" : ""
//             }`}
//           >

//             <div className="productImage">
//   <Image
//     src={product.image}
//     alt={product.title}
//     fill
//     sizes="(max-width: 768px) 100vw, 50vw"
//     className="productImg"
//   />
// </div>

//             <div className="productInfo">
//               <span className="category">
//                 {product.category}
//               </span>

//               <h2>{product.title}</h2>

//               <p>{product.desc}</p>

//               <div className="specGrid">
//                 {product.specs.map((spec, i) => (
//                   <div key={i} className="specCard">
//                     {spec}
//                   </div>
//                 ))}
//               </div>

//               <button>
//                 Learn More →
//               </button>
//             </div>
//           </div>
//         ))}
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




const technologies = [
  {
    id: 5,
    image: "/Images/EMS.png",
    category: "ENERGY MANAGEMENT SYSTEM",
    title: "EMS – The Brain Behind Every Decision",
    desc: "The Energy Management System transforms a battery into an intelligent energy asset. Running on the MG500-C edge controller, it collects real-time system data, communicates with the grid, reads tariff signals, and continuously optimises charge/discharge decisions to maximise financial returns.",
    specs: [
      "AI Scheduling",
      "Peak Shaving",
      "Remote Monitoring",
      "IEC 61850 Support",
    ],
  },

  {
    id: 6,
    image: "/Images/BMS.png",
    category: "BATTERY MANAGEMENT SYSTEM",
    title: "BMS – Cell-Level Intelligence",
    desc: "The Battery Management System monitors every battery cell in real time, preventing overcharge, over-discharge, overcurrent, and thermal anomalies while ensuring maximum safety, performance, and lifespan.",
    specs: [
      "SOC / SOH",
      "Active Balancing",
      "CAN & RS485",
      "Thermal Protection",
    ],
  },

  {
    id: 7,
    image: "/Images/PCS.png",
    category: "POWER CONVERSION SYSTEM",
    title: "PCS – Where DC Becomes AC",
    desc: "High-efficiency bidirectional power conversion with grid-forming capability, fast response times, reactive power compensation, and full support for Indian grid code requirements.",
    specs: [
      "98.5% Efficiency",
      "<20ms Response",
      "Grid Forming",
      "IP54 Rated",
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





<section className="productsSection">

  {/* <div className="sectionTitle">
    <h2>Core Technologies</h2>

    <p>
      Advanced EMS, BMS and PCS technologies powering every
      Traansbolt Battery Energy Storage System.
    </p>
  </div> */}

  {technologies.map((tech, index) => (
    <div
      key={tech.id}
      className={`productRow ${
        index % 2 === 1 ? "reverse" : ""
      }`}
    >
      <div className="productImage">
        <Image
          src={tech.image}
          alt={tech.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="productImg"
        />
      </div>

      <div className="productInfo">

        <span className="category">
          {tech.category}
        </span>

        <h2>{tech.title}</h2>

        <p>{tech.desc}</p>

        <div className="specGrid">
          {tech.specs.map((spec, i) => (
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