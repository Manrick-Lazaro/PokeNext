import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/pokeball.png";

export function Navbar(): JSX.Element {
  return (
    <>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href={"/"}>
                <Image
                  width={"20"}
                  height={"20"}
                  alt="Logo do site"
                  className="h-8 w-8 rounded-full"
                  src={logo}
                />
              </Link>
              <div className="hidden md:block">
                <div className="flex ml-10 items-baseline space-x-4">
                  <Link
                    href={"/"}
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/products/shirt"}
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    T-shirt
                  </Link>
                  <Link
                    href={"/products/moleton"}
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Moleton
                  </Link>
                </div>
              </div>
            </div>

            <div className="mr-2 flex md:hidden">
              <button
                id="menuButton"
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gay-700 focus:outline-none focus:bg-gray-700 focus:text-white trasition duration-130 ease-in-out"
                aria-label="Menu"
                aria-expanded="false"
              >
                <svg
                  className="n-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6H16M4 12H16M4 18H16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
