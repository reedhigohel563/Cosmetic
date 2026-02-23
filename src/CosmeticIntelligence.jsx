import { useState, useEffect, useRef } from "react";

// ── Utility: fade-in on scroll ──────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Icons (inline SVG, no external deps) ────────────────────────────────────
const Icon = ({ d, size = 24, stroke = "#B7A18E" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

const icons = {
  research:
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  launch: "M13 10V3L4 14h7v7l9-11h-7z",
  pricing:
    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  consumer:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  competitive:
    "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  distribution:
    "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  specialization:
    "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  accuracy: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  strategy:
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  confidential:
    "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  linkedin:
    "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  twitter:
    "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  phone:
    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  location:
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
};

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #C9A9A6, #B7A18E)",
              }}
            >
              <span className="text-white text-xs font-bold tracking-tight">
                CI
              </span>
            </div>
            <div>
              <span
                className="text-base font-semibold tracking-tight"
                style={{
                  color: "#2B2B2B",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Cosmetiq
              </span>
              <span
                className="text-xs block leading-none"
                style={{
                  color: "#B7A18E",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Industries", "Reports", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{
                  color: "#2B2B2B",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-medium px-5 py-2.5 rounded-xl border transition-all duration-200 hover:shadow-md"
              style={{
                borderColor: "#B7A18E",
                color: "#B7A18E",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Request Proposal
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #C9A9A6, #B7A18E)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                style={{ background: "#2B2B2B" }}
              />
              <span
                className={`block h-0.5 w-6 transition-all ${menuOpen ? "opacity-0" : ""}`}
                style={{ background: "#2B2B2B" }}
              />
              <span
                className={`block h-0.5 w-6 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                style={{ background: "#2B2B2B" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t px-6 py-6 space-y-4"
          style={{ borderColor: "#E8D8C3" }}
        >
          {["Services", "Industries", "Reports", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium py-2"
              style={{ color: "#2B2B2B", fontFamily: "'Poppins', sans-serif" }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center text-sm font-semibold px-5 py-3 rounded-xl text-white mt-2"
            style={{
              background: "linear-gradient(135deg, #C9A9A6, #B7A18E)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Request Proposal
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#F8F5F2" }}
    >
      {/* Abstract background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-3/4 h-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, #E8D8C3 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 0% 100%, #C9A9A6 0%, transparent 60%)",
          }}
        />
        {/* Geometric dots */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#C9A9A6" : "#B7A18E",
            }}
          />
        ))}
        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#B7A18E"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8 animate-fade-in">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: "#E8D8C3",
                color: "#B7A18E",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#C9A9A6" }}
              />
              Trusted by 200+ Beauty Brands Globally
            </div>

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight"
              style={{
                color: "#2B2B2B",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Strategic{" "}
              <span
                className="font-semibold italic"
                style={{ color: "#C9A9A6" }}
              >
                Intelligence
              </span>
              <br />
              for the Cosmetic
              <br />
              <span className="font-medium">Industry</span>
            </h1>

            <p
              className="text-lg leading-relaxed max-w-md"
              style={{ color: "#6B6B6B", fontFamily: "'Poppins', sans-serif" }}
            >
              Data-driven insights, competitive intelligence, and growth
              strategies for beauty brands navigating an evolving market
              landscape.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #C9A9A6, #B7A18E)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Explore Services
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border-2 transition-all duration-300 hover:shadow-md hover:bg-white"
                style={{
                  borderColor: "#B7A18E",
                  color: "#B7A18E",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Request Proposal
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-4">
              {[
                ["200+", "Brand Clients"],
                ["15+", "Years Experience"],
                ["40+", "Markets Covered"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div
                    className="text-2xl font-semibold"
                    style={{
                      color: "#C9A9A6",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{
                      color: "#9B9B9B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "white", border: "1px solid #E8D8C3" }}
            >
              {/* Dashboard header */}
              <div
                className="px-6 py-4 flex items-center gap-3 border-b"
                style={{ borderColor: "#F0EAE4", background: "#FDFBF9" }}
              >
                <div className="flex gap-1.5">
                  {["#C9A9A6", "#E8D8C3", "#B7A18E"].map((c) => (
                    <div
                      key={c}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div
                  className="text-xs font-medium"
                  style={{
                    color: "#B7A18E",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Market Intelligence Dashboard
                </div>
              </div>
              {/* Dashboard body */}
              <div className="p-6 space-y-5" style={{ background: "#FDFBF9" }}>
                {/* Chart bars */}
                <div>
                  <div
                    className="text-xs font-medium mb-3"
                    style={{
                      color: "#6B6B6B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Beauty Market Growth by Segment (2024)
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Skincare", pct: 82, color: "#C9A9A6" },
                      { label: "Haircare", pct: 68, color: "#B7A18E" },
                      { label: "Makeup", pct: 55, color: "#E8D8C3" },
                      { label: "Fragrance", pct: 73, color: "#D4BCB9" },
                    ].map(({ label, pct, color }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span
                          className="text-xs w-16"
                          style={{
                            color: "#9B9B9B",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {label}
                        </span>
                        <div
                          className="flex-1 h-2 rounded-full"
                          style={{ background: "#F0EAE4" }}
                        >
                          <div
                            className="h-2 rounded-full transition-all"
                            style={{ width: `${pct}%`, background: color }}
                          />
                        </div>
                        <span
                          className="text-xs font-medium w-8 text-right"
                          style={{
                            color: "#6B6B6B",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          {pct}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      label: "Market Size",
                      value: "$580B",
                      sub: "+6.8% YoY",
                      up: true,
                    },
                    {
                      label: "Top Region",
                      value: "APAC",
                      sub: "43% share",
                      up: true,
                    },
                    {
                      label: "Brands Tracked",
                      value: "2,400+",
                      sub: "Globally",
                      up: null,
                    },
                    {
                      label: "Reports Issued",
                      value: "380+",
                      sub: "This quarter",
                      up: null,
                    },
                  ].map(({ label, value, sub, up }) => (
                    <div
                      key={label}
                      className="p-3 rounded-xl"
                      style={{
                        background: "white",
                        border: "1px solid #F0EAE4",
                      }}
                    >
                      <div
                        className="text-xs"
                        style={{
                          color: "#9B9B9B",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-lg font-semibold mt-0.5"
                        style={{
                          color: "#2B2B2B",
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                        }}
                      >
                        {value}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{
                          color: up ? "#8FAF8F" : "#B7A18E",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trend line mock */}
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "white", border: "1px solid #F0EAE4" }}
                >
                  <div
                    className="text-xs font-medium mb-3"
                    style={{
                      color: "#6B6B6B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Competitive Index — Skincare
                  </div>
                  <svg viewBox="0 0 260 60" className="w-full">
                    <polyline
                      points="0,50 40,38 80,42 120,22 160,28 200,12 240,8 260,5"
                      fill="none"
                      stroke="#C9A9A6"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="0,50 40,38 80,42 120,22 160,28 200,12 240,8 260,5"
                      fill="url(#grad)"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#C9A9A6"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#C9A9A6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              style={{ border: "1px solid #E8D8C3" }}
            >
              <div
                className="text-xs font-medium"
                style={{
                  color: "#9B9B9B",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                New Report
              </div>
              <div
                className="text-sm font-semibold mt-0.5"
                style={{
                  color: "#2B2B2B",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Asia Beauty Trends
              </div>
              <div
                className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block"
                style={{ background: "#E8D8C3", color: "#B7A18E" }}
              >
                2025 Edition
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ─────────────────────────────────────────────────────────────────
function Services() {
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
            style={{ color: "#C9A9A6", fontFamily: "'Poppins', sans-serif" }}
          >
            Our Expertise
          </span>
          <h2
            className="text-4xl lg:text-5xl font-light mt-3 leading-tight"
            style={{
              color: "#2B2B2B",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
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
            style={{ color: "#6B6B6B", fontFamily: "'Poppins', sans-serif" }}
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
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#7B7B7B",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {desc}
              </p>
              <div
                className="mt-6 flex items-center gap-1.5 text-xs font-medium transition-all duration-200 opacity-0 group-hover:opacity-100"
                style={{
                  color: "#C9A9A6",
                  fontFamily: "'Poppins', sans-serif",
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
}

// ── Industries ────────────────────────────────────────────────────────────────
function Industries() {
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
            style={{ color: "#B7A18E", fontFamily: "'Poppins', sans-serif" }}
          >
            Industry Coverage
          </span>
          <h2
            className="text-3xl lg:text-4xl font-light mt-3"
            style={{
              color: "#2B2B2B",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
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
                  fontFamily: "'Poppins', sans-serif",
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

// ── Why Choose Us ─────────────────────────────────────────────────────────────
function WhyUs() {
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
              style={{ color: "#C9A9A6", fontFamily: "'Poppins', sans-serif" }}
            >
              Why Choose Us
            </span>
            <h2
              className="text-4xl lg:text-5xl font-light mt-3 leading-tight"
              style={{
                color: "#2B2B2B",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
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
              style={{ color: "#6B6B6B", fontFamily: "'Poppins', sans-serif" }}
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
                fontFamily: "'Poppins', sans-serif",
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
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: "#7B7B7B",
                    fontFamily: "'Poppins', sans-serif",
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

// ── Featured Reports ──────────────────────────────────────────────────────────
function Reports() {
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
    <section id="reports" className="py-24" style={{ background: "#FAF7F4" }}>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#C9A9A6", fontFamily: "'Poppins', sans-serif" }}
            >
              Featured Intelligence
            </span>
            <h2
              className="text-4xl lg:text-5xl font-light mt-3 leading-tight"
              style={{
                color: "#2B2B2B",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Latest Research
              <br />
              <span
                className="font-semibold italic"
                style={{ color: "#C9A9A6" }}
              >
                Publications
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            style={{ color: "#B7A18E", fontFamily: "'Poppins', sans-serif" }}
          >
            Browse all reports
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {reports.map(({ cat, title, summary, pages }) => (
            <div
              key={title}
              className="group rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ background: "white", borderColor: "#F0EAE4" }}
            >
              {/* Report cover */}
              <div
                className="h-40 relative flex items-end p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #E8D8C3 0%, #C9A9A6 100%)",
                }}
              >
                <div
                  className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(255,255,255,0.3)",
                    color: "white",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {pages}
                </div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase text-white/80"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {cat}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-base font-semibold leading-snug mb-3"
                  style={{
                    color: "#2B2B2B",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-xs leading-relaxed flex-1"
                  style={{
                    color: "#7B7B7B",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {summary}
                </p>
                <button
                  className="mt-6 w-full py-3 rounded-xl text-sm font-medium border transition-all duration-200 hover:shadow-md"
                  style={{
                    borderColor: "#C9A9A6",
                    color: "#C9A9A6",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  View Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  const [ref, visible] = useFadeIn();
  return (
    <section id="contact" className="py-24" style={{ background: "#F8F5F2" }}>
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div
          className="relative rounded-3xl overflow-hidden p-16"
          style={{
            background:
              "linear-gradient(135deg, #E8D8C3 0%, #D4BCB9 50%, #C9A9A6 100%)",
          }}
        >
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="dots"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="15" cy="15" r="1.5" fill="#2B2B2B" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative">
            <h2
              className="text-4xl lg:text-5xl font-light leading-tight"
              style={{
                color: "#2B2B2B",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Unlock Growth in the
              <br />
              <span className="font-semibold italic">Beauty Market</span>
            </h2>
            <p
              className="mt-5 text-base max-w-xl mx-auto"
              style={{ color: "#4B4B4B", fontFamily: "'Poppins', sans-serif" }}
            >
              Let us help you make faster, smarter decisions with research built
              exclusively for beauty and personal care.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <a
                href="mailto:hello@cosmetiqintel.com"
                className="px-10 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  background: "#2B2B2B",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Contact Us
              </a>
              <a
                href="#reports"
                className="px-10 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-md"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  color: "#2B2B2B",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                View Sample Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#2B2B2B" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #C9A9A6, #B7A18E)",
                }}
              >
                <span className="text-white text-xs font-bold tracking-tight">
                  CI
                </span>
              </div>
              <div>
                <span
                  className="text-base font-semibold text-white"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Cosmetiq
                </span>
                <span
                  className="text-xs block leading-none"
                  style={{
                    color: "#B7A18E",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Intelligence
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#9B9B9B", fontFamily: "'Poppins', sans-serif" }}
            >
              Premium market intelligence and strategic consulting for the
              global beauty industry.
            </p>
            <div className="flex gap-3">
              {["linkedin", "twitter", "mail"].map((key) => (
                <a
                  key={key}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Icon d={icons[key]} size={16} stroke="#B7A18E" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C9A9A6", fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h5>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Press & Media",
                "Blog",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{
                      color: "#9B9B9B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C9A9A6", fontFamily: "'Poppins', sans-serif" }}
            >
              Services
            </h5>
            <ul className="space-y-3">
              {[
                "Market Research",
                "Consumer Insights",
                "Pricing Intelligence",
                "Competitive Benchmarking",
                "Distribution Analysis",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm transition-colors hover:text-white"
                    style={{
                      color: "#9B9B9B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C9A9A6", fontFamily: "'Poppins', sans-serif" }}
            >
              Contact
            </h5>
            <ul className="space-y-4">
              {[
                { key: "mail", text: "hello@cosmetiqintel.com" },
                { key: "phone", text: "+1 (212) 555-0192" },
                {
                  key: "location",
                  text: "250 Park Avenue, New York, NY 10177",
                },
              ].map(({ key, text }) => (
                <li key={key} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <Icon d={icons[key]} size={15} stroke="#B7A18E" />
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "#9B9B9B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "#5B5B5B", fontFamily: "'Poppins', sans-serif" }}
          >
            © 2025 Cosmetiq Intelligence. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "#5B5B5B", fontFamily: "'Poppins', sans-serif" }}
          >
            Trusted intelligence for a beautiful industry.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function Cosmo() {
  return (
    <>
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInUp 0.9s ease forwards;
        }
      `}</style> */}

      <div style={{ background: "#F8F5F2" }}>
        <Navbar />
        <Hero />
        <Services />
        <Industries />
        <WhyUs />
        <Reports />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
