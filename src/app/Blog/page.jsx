import "../../Styles/Blog.css";
import Image from "next/image";

export default function Blog() {
  const blogs = [
    {
      title: "What is a BESS and How Does It Work?",
      category: "Technology",
      date: "June 2026",
      image: "/Images/B1.png",
      desc: "Learn how Battery Energy Storage Systems improve reliability, reduce costs, and support renewable energy integration."
    },
    {
      title: "BESS vs Diesel Generator",
      category: "Comparison",
      date: "June 2026",
      image: "/Images/B2.png",
      desc: "Compare lifecycle costs, maintenance requirements, emissions, and ROI between BESS and diesel generators."
    },
    {
      title: "Peak Shaving with BESS",
      category: "Savings",
      date: "May 2026",
      image: "/Images/B3.png",
      desc: "Reduce demand charges and improve energy efficiency using intelligent peak shaving strategies."
    },
    {
      title: "Solar + Storage ROI Guide",
      category: "Solar Integration",
      date: "May 2026",
      image: "/Images/B4.png",
      desc: "Discover how solar and battery storage work together to maximize self-consumption and savings."
    },
    {
      title: "LFP vs NMC Batteries",
      category: "Battery Technology",
      date: "April 2026",
      image: "/Images/B5.png",
      desc: "Understand the key differences between LFP and NMC battery chemistry for commercial applications."
    },
    {
      title: "BESS Cost in India 2026",
      category: "Investment",
      date: "April 2026",
      image: "/Images/B6.png",
      desc: "A complete breakdown of BESS pricing, installation costs, financing options, and ROI."
    }
  ];

  return (
    <>
      {/* <section className="blogHero">
        <div className="blogOverlay"></div>

        <div className="blogHeroContent">
          <span className="blogTag">Resources & Insights</span>

          <h1>
            Learn. Calculate.
            <span> Decide.</span>
          </h1>

          <p>
            Everything you need to make smart energy storage decisions —
            educational guides, industry insights, ROI models and real-world
            case studies.
          </p>
        </div>
      </section> */}


      <section className="blogHero">

  {/* Background Image */}
  <Image
    src="/Images/BlogB2.png"
    alt="Traansbolt Blog"
    fill
    priority
    className="blogBg"
  />

  {/* Overlay */}
  <div className="blogOverlay"></div>

  <div className="blogHeroContent">
    <span className="blogTag">Resources & Insights</span>

    <h1>
      Learn. Calculate.
      <span> Decide.</span>
    </h1>

    <p>
      Everything you need to make smart energy storage decisions —
      educational guides, industry insights, ROI models and real-world
      case studies.
    </p>
  </div>

</section>

      <section className="blogSection">
        <div className="blogContainer">

          <div className="sectionHeader">
            <h2>Latest Articles</h2>
            <p>
              Expert insights on Battery Energy Storage Systems, renewable
              integration, peak shaving and commercial energy optimization.
            </p>
          </div>

          {/* <div className="blogGrid">
            {blogs.map((blog, index) => (
              <div className="blogCard" key={index}>
                <div className="blogImage">
                  <img src={blog.image} alt={blog.title} />
                </div>

                <div className="blogContent">
                  <div className="blogMeta">
                    <span>{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>

                  <h3>{blog.title}</h3>

                  <p>{blog.desc}</p>

                  <button className="readBtn">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div> */}



          <div className="blogGrid">
  {blogs.map((blog, index) => (
    <div className="blogCard" key={index}>
      
      <div className="blogImageWrapper">
        {/* <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="blogImage"
        /> */}

        <Image
  src={blog.image}
  alt={blog.title}
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  className="blogImage"
/>
      </div>

      <div className="blogCardContent">
        <span className="blogCategory">
          {blog.category}
        </span>

        <h3>{blog.title}</h3>

        <p>{blog.desc}</p>

        <div className="blogMeta">
          <span>{blog.date}</span>
        </div>
      </div>

    </div>
  ))}
</div>

        </div>
      </section>
    </>
  );
}