import Image from "next/image";
import Logo from "../../assets/logo.svg";

const dropdownItems = {
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Service: [
    { label: "Web Development", href: "#" },
    { label: "SEO", href: "#" },
    { label: "Marketing", href: "#" },
  ],
  Industry: [
    { label: "E-commerce", href: "#" },
    { label: "Education", href: "#" },
    { label: "Healthcare", href: "#" },
  ],
  Portfolio: [
    { label: "Projects", href: "#" },
    { label: "Case Studies", href: "#" },
  ],
  Media: [
    { label: "Blog", href: "#" },
    { label: "News", href: "#" },
    { label: "Events", href: "#" },
  ],
};

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Image src={Logo} alt="Logo" width={200} height={200} />

        {/* Navigation */}
        <div className="flex space-x-6">
          {Object.entries(dropdownItems).map(([label, items]) => (
            <div key={label} className="relative group">
              <button className="flex items-center text-gray-800 font-medium px-4 py-2">
                {label}
                <svg
                  className="ml-2 w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              <ul className="absolute z-10 hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-60">
                {items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cost Calculator */}
        <button className="px-6 py-2  bg-primary text-white hover:bg-primaryHover rounded-lg">
          Cost Calculator
        </button>
      </div>
    </header>
  );
}
