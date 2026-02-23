
import Icon from "./Icons";
import icons from "../Hooks/useIcons";

const Footer = () => {
  return (
    <footer className="bg-primary-color/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary-color to-secondary-color">
                <span className="text-white text-xs font-bold tracking-tight">CI</span>
              </div>
              <div>
                <span className="text-base font-semibold text-secondary-color font-heading">Cosmetiq</span>
                <span className="text-xs block leading-none text-primary-color font-body">Intelligence</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-body-color font-body">
              Premium market intelligence and strategic consulting for the
              global beauty industry.
            </p>
            <div className="flex gap-3">
              {["linkedin", "twitter", "mail"].map((key) => (
                <a
                  key={key}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 bg-primary-color/20 border border-primary-color/30"
                >
                  <Icon d={icons[key]} size={16} stroke="#CCAD8E" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-bold tracking-widest uppercase mb-5 text-secondary-color">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press & Media", "Blog", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-body-color transition-colors hover:text-secondary-color font-body">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-sm font-bold tracking-widest uppercase mb-5 text-secondary-color">
              Services
            </h5>
            <ul className="space-y-3">
              {["Market Research", "Consumer Insights", "Pricing Intelligence", "Competitive Benchmarking", "Distribution Analysis"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-body-color transition-colors hover:text-secondary-color font-body">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-bold tracking-widest uppercase mb-5 text-secondary-color">
              Contact
            </h5>
            <ul className="space-y-4">
              {[
                { key: "mail",     text: "hello@cosmetiqintel.com" },
                { key: "phone",    text: "+1 (212) 555-0192" },
                { key: "location", text: "250 Park Avenue, New York, NY 10177" },
              ].map(({ key, text }) => (
                <li key={key} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <Icon d={icons[key]} size={15} stroke="#CCAD8E" />
                  </div>
                  <span className="text-sm text-body-color font-body">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-primary-color/30">
          <p className="text-xs text-body-color/70 font-body">© 2025 Cosmetiq Intelligence. All rights reserved.</p>
          <p className="text-xs text-body-color/70 font-body">Trusted intelligence for a beautiful industry.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
