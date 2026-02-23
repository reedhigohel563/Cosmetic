
import useFadeIn from "../../Hooks/useFade";

const HomepageSection5 = () => {
  const [ref, visible] = useFadeIn();

  const reports = [
    {
      cat: "Skincare",
      title: "Global Anti-Aging Skincare Market Outlook 2025",
      summary:
        "A 180-page deep dive into market sizing, white-space opportunities, and competitive landscapes across the $72B anti-aging category.",
      pages: "180 pages",
    },
    {
      cat: "Fragrance",
      title: "Luxury Fragrance Consumer Sentiment Report",
      summary:
        "Primary research across 12 markets revealing shifting consumer preferences, price thresholds, and digital discovery patterns.",
      pages: "140 pages",
    },
    {
      cat: "Haircare",
      title: "Prestige Haircare Channel Disruption Report",
      summary:
        "How DTC and social commerce are reshaping prestige haircare — with brand-level tracking and strategic guidance for incumbents.",
      pages: "120 pages",
    },
  ];

  return (
    <section id="reports" className="py-24 bg-primary-color/5">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-color">
              Featured Intelligence
            </span>
            {/* h2 inherits font-heading + text-heading-color from CSS globals */}
            <h2 className="text-4xl lg:text-5xl font-light mt-3 leading-tight">
              Latest Research
              <br />
              <span className="font-semibold italic text-primary-color">
                Publications
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium flex items-center gap-1.5 hover:opacity-70 transition-opacity text-primary-color"
          >
            Browse all reports
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {reports.map(({ cat, title, summary, pages }) => (
            <div
              key={title}
              className="group rounded-2xl overflow-hidden border border-primary-color/20 bg-white flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Report cover */}
              <div className="h-40 relative flex items-end p-6 bg-gradient-to-br from-primary-color/50 to-primary-color">
                <div className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-medium bg-white/30 text-white">
                  {pages}
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
                  {cat}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* h3 inherits font-heading + text-heading-color from CSS globals */}
                <h3 className="text-xl font-bold leading-snug mb-3">
                  {title}
                </h3>

                {/* p inherits font-body + text-body-color from CSS globals */}
                <p className="text-base leading-relaxed flex-1 opacity-80">
                  {summary}
                </p>

                <button className="mt-6 w-full py-3 rounded-xl text-sm font-medium border border-primary-color text-primary-color transition-all duration-200 hover:shadow-md">
                  View Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageSection5;