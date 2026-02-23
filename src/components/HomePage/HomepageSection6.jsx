import useFadeIn from "../../Hooks/useFade";

const HomepageSection6 = () => {
  const [ref, visible] = useFadeIn();

  return (
    <section id="contact" className="py-24 bg-primary-color/5">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative rounded-3xl overflow-hidden p-16 bg-gradient-to-br from-primary-color/40 via-primary-color/60 to-primary-color">

          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative">
            {/* h2 inherits font-heading + text-heading-color from CSS globals */}
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              Unlock Growth in the
              <br />
              <span className="font-semibold italic">Beauty Market</span>
            </h2>

            {/* p uses secondary-color for contrast on the gradient background */}
            <p className="mt-5 text-base max-w-xl mx-auto text-secondary-color/80">
              Let us help you make faster, smarter decisions with research built
              exclusively for beauty and personal care.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <a
                href="mailto:hello@cosmetiqintel.com"
                className="px-10 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white/50 text-secondary-color"
              >
                Contact Us
              </a>
              <a
                href="#reports"
                className="px-10 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-md bg-white/50 text-secondary-color"
              >
                View Sample Reports
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomepageSection6;