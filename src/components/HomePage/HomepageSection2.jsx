import useFadeIn from "../../Hooks/useFade";
import Icon from "../Icons";
import icons from "../../Hooks/useIcons";

const HomepageSection2 = () => {
  const [ref, visible] = useFadeIn();

  const services = [
    {
      key: "research",
      title: "Market Research & Intelligence",
      desc: "Comprehensive primary and secondary research to map market dynamics, size, and emerging opportunities across beauty categories.",
    },
    {
      key: "launch",
      title: "Product Launch Strategy",
      desc: "End-to-end go-to-market intelligence: timing, positioning, pricing tiers, and regional rollout playbooks.",
    },
    {
      key: "pricing",
      title: "Pricing Intelligence",
      desc: "Real-time competitive price tracking, elasticity modeling, and premium positioning frameworks for beauty SKUs.",
    },
    {
      key: "consumer",
      title: "Consumer Insights",
      desc: "Deep qualitative and quantitative research to decode purchase behavior, attitudes, and unmet needs across demographics.",
    },
    {
      key: "competitive",
      title: "Competitive Benchmarking",
      desc: "Systematic tracking of brand portfolios, campaign strategies, distribution reach, and share-of-shelf metrics.",
    },
    {
      key: "distribution",
      title: "Distribution & Channel Analysis",
      desc: "Multi-channel mapping across retail, DTC, e-commerce, and specialty channels to optimize route-to-market strategy.",
    },
  ];

  return (
    <section id="services" className="py-24" style={{ background: "#F8F5F2" }}>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#C9A9A6" }}
          >
            Our Expertise
          </span>
          <h2
            className="text-4xl lg:text-5xl font-light mt-3 leading-tight"
            style={{
              color: "#2B2B2B",
             
            }}
          >
            Services Built for
            <br />
            <span className="font-semibold italic" style={{ color: "#C9A9A6" }}>
              Beauty Brands
            </span>
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "#6B6B6B" }}
          >
            Precision intelligence solutions designed specifically for the
            cosmetic and personal care industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, title, desc }, i) => (
            <div
              key={key}
              className="group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{
                background: "white",
                borderColor: "#F0EAE4",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:scale-110"
                style={{ background: "#F8F5F2", border: "1px solid #E8D8C3" }}
              >
                <Icon d={icons[key]} size={22} stroke="#C9A9A6" />
              </div>
              <h3
                className="text-base font-semibold mb-3 leading-snug"
                style={{
                  color: "#2B2B2B",
                  
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#7B7B7B",
                 
                }}
              >
                {desc}
              </p>
              <div
                className="mt-6 flex items-center gap-1.5 text-xs font-medium transition-all duration-200 opacity-0 group-hover:opacity-100"
                style={{
                  color: "#C9A9A6",
               
                }}
              >
                Learn more
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageSection2;
