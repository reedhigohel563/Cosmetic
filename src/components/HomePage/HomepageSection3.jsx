
import useFadeIn from "../../Hooks/useFade";


const HomepageSection3 = () => {
  const [ref, visible] = useFadeIn();
  const industries = [
    { label: "Skincare", emoji: "✦" },
    { label: "Haircare", emoji: "✦" },
    { label: "Makeup", emoji: "✦" },
    { label: "Fragrance", emoji: "✦" },
    { label: "Men's Grooming", emoji: "✦" },
    { label: "Natural & Organic", emoji: "✦" },
  ];

  return (
    <section
      id="industries"
      className="py-20"
      style={{ background: "#E8D8C3" }}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#B7A18E" }}
          >
            Industry Coverage
          </span>
          <h2
            className="text-3xl lg:text-4xl font-light mt-3"
            style={{
              color: "#2B2B2B",
             
            }}
          >
            Covering Every Beauty Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map(({ label }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{
                background: "white",
                border: "1px solid rgba(183,161,142,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "#F8F5F2", border: "1px solid #E8D8C3" }}
              >
                <span style={{ fontSize: 18 }}>
                  {label === "Skincare"
                    ? "✧"
                    : label === "Haircare"
                      ? "◈"
                      : label === "Makeup"
                        ? "◇"
                        : label === "Fragrance"
                          ? "❋"
                          : label === "Men's Grooming"
                            ? "◉"
                            : "⊛"}
                </span>
              </div>
              <span
                className="text-sm font-medium"
                style={{
                  color: "#2B2B2B",
                
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageSection3