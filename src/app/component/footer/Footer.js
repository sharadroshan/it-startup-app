import Image from "next/image";
import goodfirms from "../../assets/goodfirms.png";
import Clutch from "../../assets/clutch.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Useful Resources Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl ">Useful Resources</h3>
          <ul className="space-y-2">
            {[
              "About Prometteur",
              "How It Works",
              "Testimonials",
              "Careers",
              "Blog",
              "Contact Us ",
              "Site Map",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-gray-500 transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl">What We Offer</h3>
          <ul className="space-y-2">
            {[
              "Web Development",
              "Mobile App Development",
              "Website Design",
              "E-commerce Solutions",
              "Software Development",
              "IoT Solutions",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-gray-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Global Presence Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl">Global Presence</h3>
          <div className="flex space-x-4 text-3xl">
            {[
              { flag: "🇮🇳", label: "India" },
              { flag: "🇺🇸", label: "USA" },
              { flag: "🇩🇪", label: "Germany" },
              { flag: "🇫🇷", label: "France" },
            ].map((country, index) => (
              <span
                key={index}
                title={country.label}
                className="hover:scale-110 transform transition"
              >
                {country.flag}
              </span>
            ))}
          </div>
          <div className="text-sm">
            <p className="font-semibold">Sales Details:</p>
            <p>+91 8087555678</p>
            <p>sales@prometteursolutions.com</p>
          </div>
          <div className="flex items-center space-x-4 mt-6">
            {[
              { src: goodfirms, alt: "GoodFirms Logo" },
              { src: Clutch, alt: "Clutch Logo" },
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo.src} // Directly use the imported image object, not inside an object
                alt={logo.alt}
                width={100}
                height={50}
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl">Contact Us</h3>
          <ul className="space-y-2">
            {[
              {
                label: "Email Support",
                href: "mailto:support@prometteursolutions.com",
              },
              { label: "Call Us: +91 8087555678", href: "tel:+918087555678" },
              { label: "Live Chat", href: "#" },
              { label: "FAQs", href: "#" },
            ].map((contact, index) => (
              <li key={index}>
                <a
                  href={contact.href}
                  className="hover:text-gray-500 transition duration-300"
                >
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 mt-6 text-2xl">
            {[
              "facebook",
              "twitter",
              "linkedin",
              "instagram",
              "behance",
              "youtube",
            ].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-gray-500 transition duration-300"
                aria-label={platform}
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-primary pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Prometteur Solutions. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
