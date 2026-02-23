// import React from "react";

// const HompageSection1 = () => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center overflow-hidden bg-primary-color/10"
//     >
//       {/* Abstract background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-3/4 h-full opacity-30 bg-[radial-gradient(ellipse_at_80%_20%,theme(colors.primary-color/50%)_0%,transparent_60%)]" />
//         <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20 bg-[radial-gradient(ellipse_at_0%_100%,theme(colors.secondary-color/30%)_0%,transparent_60%)]" />

//         {/* Geometric dots */}
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute rounded-full opacity-20 ${i % 2 === 0 ? "bg-secondary-color" : "bg-primary-color"}`}
//             style={{
//               width: Math.random() * 6 + 2,
//               height: Math.random() * 6 + 2,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}

//         {/* Grid lines */}
//         <svg
//           className="absolute inset-0 w-full h-full opacity-5"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
//               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-color" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left: Copy */}
//           <div className="space-y-8 animate-fade-in">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs bg-primary-color text-secondary-color">
//               <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-secondary-color" />
//               Trusted by 200+ Beauty Brands Globally
//             </div>

//             <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-secondary-color">
//               Strategic{" "}
//               <span className="font-semibold italic text-primary-color">
//                 Intelligence
//               </span>
//               <br />
//               for the Cosmetic
//               <br />
//               <span className="font-medium">Industry</span>
//             </h1>

//             <p className="text-lg leading-relaxed max-w-md text-secondary-color/70">
//               Data-driven insights, competitive intelligence, and growth
//               strategies for beauty brands navigating an evolving market
//               landscape.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="#services"
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-primary-color to-secondary-color"
//               >
//                 Explore Services
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </a>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border-2 transition-all duration-300 hover:shadow-md hover:bg-white border-primary-color text-primary-color"
//               >
//                 Request Proposal
//               </a>
//             </div>

//             {/* Stats */}
//             <div className="flex gap-10 pt-4">
//               {[
//                 ["200+", "Brand Clients"],
//                 ["15+", "Years Experience"],
//                 ["40+", "Markets Covered"],
//               ].map(([num, label]) => (
//                 <div key={label}>
//                   <div className="text-2xl font-semibold text-primary-color">{num}</div>
//                   <div className="text-xs mt-0.5 text-secondary-color/60">{label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: Dashboard mockup */}
//           <div className="relative hidden lg:block">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-primary-color/30">

//               {/* Dashboard header */}
//               <div className="px-6 py-4 flex items-center gap-3 border-b border-primary-color/20 bg-primary-color/5">
//                 <div className="flex gap-1.5">
//                   {["bg-primary-color", "bg-primary-color/50", "bg-secondary-color"].map((c) => (
//                     <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
//                   ))}
//                 </div>
//                 <div className="text-xs font-medium text-primary-color">
//                   Market Intelligence Dashboard
//                 </div>
//               </div>

//               {/* Dashboard body */}
//               <div className="p-6 space-y-5 bg-primary-color/5">

//                 {/* Chart bars */}
//                 <div>
//                   <div className="text-xs font-medium mb-3 text-secondary-color/70">
//                     Beauty Market Growth by Segment (2024)
//                   </div>
//                   <div className="space-y-2.5">
//                     {[
//                       { label: "Skincare",  pct: 82, colorClass: "bg-primary-color" },
//                       { label: "Haircare",  pct: 68, colorClass: "bg-secondary-color" },
//                       { label: "Makeup",    pct: 55, colorClass: "bg-primary-color/40" },
//                       { label: "Fragrance", pct: 73, colorClass: "bg-secondary-color/60" },
//                     ].map(({ label, pct, colorClass }) => (
//                       <div key={label} className="flex items-center gap-3">
//                         <span className="text-xs w-16 text-secondary-color/60">{label}</span>
//                         <div className="flex-1 h-2 rounded-full bg-primary-color/20">
//                           <div className={`h-2 rounded-full transition-all ${colorClass}`} style={{ width: `${pct}%` }} />
//                         </div>
//                         <span className="text-xs font-medium w-8 text-right text-secondary-color/70">{pct}%</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* KPI Cards */}
//                 <div className="grid grid-cols-2 gap-3">
//                   {[
//                     { label: "Market Size",    value: "$580B",  sub: "+6.8% YoY",    up: true  },
//                     { label: "Top Region",     value: "APAC",   sub: "43% share",    up: true  },
//                     { label: "Brands Tracked", value: "2,400+", sub: "Globally",     up: null  },
//                     { label: "Reports Issued", value: "380+",   sub: "This quarter", up: null  },
//                   ].map(({ label, value, sub, up }) => (
//                     <div key={label} className="p-3 rounded-xl bg-white border border-primary-color/20">
//                       <div className="text-xs text-secondary-color/50">{label}</div>
//                       <div className="text-lg font-semibold mt-0.5 text-secondary-color">{value}</div>
//                       <div className={`text-xs mt-0.5 ${up ? "text-green-500" : "text-primary-color"}`}>{sub}</div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Trend line mock */}
//                 <div className="p-4 rounded-xl bg-white border border-primary-color/20">
//                   <div className="text-xs font-medium mb-3 text-secondary-color/70">
//                     Competitive Index — Skincare
//                   </div>
//                   <svg viewBox="0 0 260 60" className="w-full">
//                     <defs>
//                       <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="0%"   stopColor="#CCAD8E" stopOpacity="0.3" />
//                         <stop offset="100%" stopColor="#CCAD8E" stopOpacity="0"   />
//                       </linearGradient>
//                     </defs>
//                     <polyline
//                       points="0,50 40,38 80,42 120,22 160,28 200,12 240,8 260,5"
//                       fill="none"
//                       stroke="#CCAD8E"
//                       strokeWidth="2"
//                       strokeLinejoin="round"
//                     />
//                     <polyline
//                       points="0,50 40,38 80,42 120,22 160,28 200,12 240,8 260,5"
//                       fill="url(#grad)"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Floating badge */}
//             <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-primary-color/30">
//               <div className="text-xs font-medium text-secondary-color/50">New Report</div>
//               <div className="text-sm font-semibold mt-0.5 text-secondary-color">Asia Beauty Trends</div>
//               <div className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block bg-primary-color/20 text-secondary-color">
//                 2025 Edition
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HompageSection1;
import React from "react";

const HompageSection1 = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-color/10">
      {/* Abstract background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-full opacity-30 bg-[radial-gradient(ellipse_at_80%_20%,theme(colors.primary-color/50%)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20 bg-[radial-gradient(ellipse_at_0%_100%,theme(colors.secondary-color/30%)_0%,transparent_60%)]" />

        {/* Geometric dots */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 ${i % 2 === 0 ? "bg-secondary-color" : "bg-primary-color"}`}
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
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
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary-color"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs bg-primary-color text-secondary-color">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-secondary-color" />
              Trusted by 200+ Beauty Brands Globally
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight">
              Strategic{" "}
              <span className="font-semibold italic text-primary-color">
                Intelligence
              </span>
              <br />
              for the Cosmetic
              <br />
              <span className="font-medium">Industry</span>
            </h1>

            <p className="text-lg leading-relaxed max-w-md opacity-70">
              Data-driven insights, competitive intelligence, and growth
              strategies for beauty brands navigating an evolving market
              landscape.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-primary-color to-secondary-color"
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border-2 transition-all duration-300 hover:shadow-md hover:bg-white border-primary-color text-primary-color"
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
                  <div className="text-2xl font-semibold text-primary-color">
                    {num}
                  </div>
                  <div className="text-xs mt-0.5 opacity-60">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-primary-color/30">
              {/* Dashboard header */}
              <div className="px-6 py-4 flex items-center gap-3 border-b border-primary-color/20 bg-primary-color/5">
                <div className="flex gap-1.5">
                  {[
                    "bg-primary-color",
                    "bg-primary-color/50",
                    "bg-secondary-color",
                  ].map((c) => (
                    <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                  ))}
                </div>
                <div className="text-xs font-medium text-primary-color">
                  Market Intelligence Dashboard
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-6 space-y-5 bg-primary-color/5">
                {/* Chart bars */}
                <div>
                  <div className="text-xs font-medium mb-3 opacity-70">
                    Beauty Market Growth by Segment (2024)
                  </div>
                  <div className="space-y-2.5">
                    {[
                      {
                        label: "Skincare",
                        pct: 82,
                        colorClass: "bg-primary-color",
                      },
                      {
                        label: "Haircare",
                        pct: 68,
                        colorClass: "bg-secondary-color",
                      },
                      {
                        label: "Makeup",
                        pct: 55,
                        colorClass: "bg-primary-color/40",
                      },
                      {
                        label: "Fragrance",
                        pct: 73,
                        colorClass: "bg-secondary-color/60",
                      },
                    ].map(({ label, pct, colorClass }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="text-xs w-16 opacity-60">{label}</span>
                        <div className="flex-1 h-2 rounded-full bg-primary-color/20">
                          <div
                            className={`h-2 rounded-full transition-all ${colorClass}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium w-8 text-right opacity-70">
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
                      className="p-3 rounded-xl bg-white border border-primary-color/20"
                    >
                      <div className="text-xs opacity-50">{label}</div>
                      <div className="text-lg font-semibold mt-0.5">
                        {value}
                      </div>
                      <div
                        className={`text-xs mt-0.5 ${up ? "text-green-500" : "text-primary-color"}`}
                      >
                        {sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trend line mock */}
                <div className="p-4 rounded-xl bg-white border border-primary-color/20">
                  <div className="text-xs font-medium mb-3 opacity-70">
                    Competitive Index — Skincare
                  </div>
                  <svg viewBox="0 0 260 60" className="w-full">
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#CCAD8E"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#CCAD8E"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <polyline
                      points="0,50 40,38 80,42 120,22 160,28 200,12 240,8 260,5"
                      fill="none"
                      stroke="#CCAD8E"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="0,50 40,38 80,42 120,22 160,28 200,12 240,8 260,5"
                      fill="url(#grad)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-primary-color/30">
              <div className="text-xs font-medium opacity-50">New Report</div>
              <div className="text-sm font-semibold mt-0.5">
                Asia Beauty Trends
              </div>
              <div className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block bg-primary-color/20 text-secondary-color">
                2025 Edition
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HompageSection1;
