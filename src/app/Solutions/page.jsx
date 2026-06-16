
import "../../Styles/Solutions.css";
import Link from "next/link";

const solutions = [
  {
    id: 1,
    title: "Peak Demand Management",
    headline: "Stop Paying Peak Penalties. Let BESS Handle the Peak.",
    description:
      "Traansbolt BESS discharges stored energy during peak tariff hours, shaving your demand curve and cutting electricity bills by 20–40%.",
    image: "/Images/S1.png",
    steps: [
      "Charges during off-peak hours",
      "EMS monitors tariff data",
      "Discharges during peak hours",
      "Reduces demand charges",
      "Tracks savings in real time",
    ],
    metrics: [
      "₹6/kWh Tariff Spread",
      "20-40% Savings",
      "24-30 Month Payback",
    ],
    cta: "Calculate Your Savings",
  },

  {
    id: 2,
    title: "Backup Power & Business Continuity",
    headline: "When the Grid Fails, Traansbolt Doesn't.",
    description:
      "Instant backup power with less than 20ms switchover. Keep critical operations running without interruption.",
    image: "/Images/S2.png",
    steps: [
      "Monitor grid continuously",
      "Detect outage instantly",
      "Switch to island mode",
      "Supply critical loads",
      "Reconnect automatically",
    ],
    metrics: ["<20ms Response", "8 Hours Backup", "UPS Grade Reliability"],
    cta: "Get a Backup Assessment",
  },

  {
    id: 3,
    title: "Solar + Storage Integration",
    headline: "Maximise Every Kilowatt-Hour Your Solar Panels Generate.",
    description:
      "Store excess solar energy and use it when electricity costs are highest.",
    image: "/Images/S3.png",
    steps: [
      "Solar charges battery",
      "EMS optimizes usage",
      "Supply loads after sunset",
      "Reduce grid dependency",
      "Increase self-consumption",
    ],
    metrics: ["95% Self Consumption", "24-36 Month ROI", "Lower Energy Bills"],
    cta: "Pair Your Solar with BESS",
  },

  {
    id: 4,
    title: "Diesel Genset Displacement",
    headline: "Replace Your Diesel Dependency — Permanently.",
    description:
      "Eliminate fuel costs, maintenance, and emissions with LFP battery storage.",
    image: "/Images/S4.png",
    steps: [
      "Replace DG runtime",
      "Instant power delivery",
      "Reduce fuel consumption",
      "Lower maintenance",
      "Improve ESG performance",
    ],
    metrics: ["₹12-18/kWh Savings", "Zero Fuel Cost", "Zero Emissions"],
    cta: "Model DG Savings",
  },

  {
    id: 5,
    title: "EV Charging Hub Enablement",
    headline: "Deploy High-Power EV Charging Without Grid Upgrade Costs.",
    description:
      "Support high-power EV charging while avoiding expensive grid upgrades.",
    image: "/Images/S5.png",
    steps: [
      "Charge overnight",
      "Manage load intelligently",
      "Support EV charging",
      "Stay within limits",
      "Scale infrastructure",
    ],
    metrics: ["₹30-80L Saved", "150-500kW Support", "Future Ready"],
    cta: "Plan Your EV Hub",
  },

  {
    id: 6,
    title: "Renewable Energy Integration",
    headline: "Store It. Smooth It. Deliver It on Demand.",
    description:
      "Grid-forming BESS for utilities, IPPs and renewable developers.",
    image: "/Images/S6.png",
    steps: [
      "Store excess generation",
      "Smooth output",
      "Discharge on demand",
      "Maintain frequency",
      "Support grid stability",
    ],
    metrics: [">93% Efficiency", "<10ms Response", "Grid Forming PCS"],
    cta: "Discuss Grid Integration",
  },
];

export default function Solution() {
  return (
    <>
      <section className="solutionHero">
        <div className="container">
          <h1>Energy Storage Solutions</h1>
          <p>
            Unlock measurable ROI with advanced Battery Energy Storage Systems
            for commercial, industrial and utility-scale applications.
          </p>
        </div>
      </section>

      {solutions.map((item, index) => (
        <section
          key={item.id}
          className={`solutionSection ${
            index % 2 === 0 ? "" : "solutionReverse"
          }`}
        >
          <div className="container solutionGrid">
            <div className="solutionImage">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="solutionContent">
              <span>{item.title}</span>
              <h2>{item.headline}</h2>
              <p>{item.description}</p>
              <div className="processFlow">
                {item.steps.map((step, idx) => (
                  <div key={idx} className="stepCard">
                    <div className="stepNumber">{idx + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>

              <div className="metricsGrid">
                {item.metrics.map((metric, idx) => (
                  <div key={idx} className="metricCard">
                    {metric}
                  </div>
                ))}
              </div>
              <button>{item.cta} →</button>
            </div>
          </div>
        </section>
      ))}

      <section className="solutionCTA">
        <div className="container">
          <h2>Ready to Reduce Energy Costs?</h2>
          <p>
            Speak with our experts and discover how Traansbolt BESS can improve
            efficiency, resilience, and sustainability.
          </p>
          <Link href="/https://www.traansbolt.com/Contact">Talk To Our Experts</Link>
        </div>
      </section>
    </>
  );
}