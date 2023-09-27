import Link from "next/link";

function Header() {
  return (
    <section className="relative bg-white ">
      <div className="container mx-auto">
        <nav className="relative px-6 py-6 flex justify-between items-center z-10">
          <Link className="text-xl font-bold leading-none" href="/">
            <span className=" text-green-600 text-3xl font-bold">Dev</span>{" "}
            Agency
          </Link>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-800"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-800"></li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-800"
                href="/team"
              >
                Team
              </Link>
            </li>
            <li className="text-gray-800"></li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-800"
                href="/service"
              >
                Service
              </Link>
            </li>
            <li className="text-gray-800"></li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-800"
                href="/project"
              >
                Project
              </Link>
            </li>
            <li className="text-gray-800"></li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-800"
                href="/testimonial"
              >
                Testimonials
              </Link>
            </li>
          </ul>
          <a
            className="hidden lg:inline-block py-4 px-6 bg-green-100 hover:bg-green-500 text-sm text-green-600 hover:text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="#"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Header;
