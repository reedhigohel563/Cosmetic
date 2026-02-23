

import useFadeIn from "../../Hooks/useFade";

const HomepageSection3 = () => {
  const [ref, visible] = useFadeIn();

  const industries = [
    { label: "Skincare",        symbol: "✧" },
    { label: "Haircare",        symbol: "◈" },
    { label: "Makeup",          symbol: "◇" },
    { label: "Fragrance",       symbol: "❋" },
    { label: "Men's Grooming",  symbol: "◉" },
    { label: "Natural & Organic", symbol: "⊛" },
  ];

  return (
    <section id="industries" className="py-20 bg-primary-color/20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary-color">
            Industry Coverage
          </span>
          <h2 className="text-3xl lg:text-4xl font-light mt-3">
            Covering Every Beauty Category
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map(({ label, symbol }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-primary-color/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 bg-primary-color/10 border border-primary-color/30">
                <span className="text-lg text-secondary-color">{symbol}</span>
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageSection3;