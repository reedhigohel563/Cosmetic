
import useFadeIn from "../../Hooks/useFade";
import Icon from "../Icons";
import icons from "../../Hooks/useIcons";

const HomepageSection4 = () => {
  const [ref, visible] = useFadeIn();
  const features = [
    {
      key: "specialization",
      title: "Industry Specialization",
      desc: "Exclusively focused on the beauty and personal care sector — depth you won't find at generalist firms.",
    },
    {
      key: "accuracy",
      title: "Data Accuracy",
      desc: "Primary research supplemented by verified secondary data ensures the highest standard of intelligence.",
    },
    {
      key: "strategy",
      title: "Strategic Recommendations",
      desc: "Beyond raw data — actionable frameworks and strategic roadmaps tailored to your brand's growth goals.",
    },
    {
      key: "confidential",
      title: "Confidential Research",
      desc: "Strict NDAs and data handling protocols protect your competitive interests at every stage.",
    },
  ];

  return (
    <section className="py-24" style={{ background: "#F8F5F2" }}>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#C9A9A6" }}
            >
              Why Choose Us
            </span>
            <h2
              className="text-4xl lg:text-5xl font-light mt-3 leading-tight"
              style={{
                color: "#2B2B2B",
               
              }}
            >
              The Intelligence Edge
              <br />
              <span
                className="font-semibold italic"
                style={{ color: "#C9A9A6" }}
              >
                You Deserve
              </span>
            </h2>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              We combine deep sector expertise with rigorous methodology to
              deliver insights that move brands forward — not just reports that
              sit on shelves.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #C9A9A6, #B7A18E)",
               
              }}
            >
              Meet Our Team
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ key, title, desc }) => (
              <div
                key={key}
                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "white", borderColor: "#F0EAE4" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#F8F5F2", border: "1px solid #E8D8C3" }}
                >
                  <Icon d={icons[key]} size={20} stroke="#C9A9A6" />
                </div>
                <h4
                  className="text-sm font-semibold mb-2"
                  style={{
                    color: "#2B2B2B",
                   
                  }}
                >
                  {title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: "#7B7B7B",
                  
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageSection4