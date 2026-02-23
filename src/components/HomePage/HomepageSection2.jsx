
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
    <section id="services" className="pt-10 pb-24 bg-primary-color/5">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary-color">
            Our Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-light mt-3 leading-tight">
            Services Built for
            <br />
            <span className="font-semibold italic text-primary-color">
              Beauty Brands
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            Precision intelligence solutions designed specifically for the
            cosmetic and personal care industry.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, title, desc }, i) => (
            <div
              key={key}
              className="group p-8 rounded-2xl border border-primary-color/20 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 bg-primary-color/10 border border-primary-color/30">
                <Icon d={icons[key]} size={22} stroke="#CCAD8E" />
              </div>

              {/* Title — inherits font-heading + text-heading-color from CSS globals */}
              <h3 className="text-2xl font-semibold mb-3 leading-snug">
                {title}
              </h3>

              {/* Description — inherits font-body + text-body-color from CSS globals */}
              <p className="text-base leading-relaxed opacity-80">
                {desc}
              </p>

              {/* Learn more */}
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 text-primary-color">
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