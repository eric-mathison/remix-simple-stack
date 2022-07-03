import { Link } from "@remix-run/react";
import { Instagram } from "react-bootstrap-icons";

const navigation1: { name: string; to: string }[] = [
  { name: "Page 1", to: "/page-1" },
  { name: "Page 2", to: "/page-2" },
];

const navigation2: { name: string; to: string }[] = [
  { name: "Terms", to: "/terms" },
  { name: "Privacy Policy", to: "/privacy-policy" },
];

const date: Date = new Date();

export default function Footer() {
  return (
    <footer className="bg-gray-600 px-2 py-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap justify-center">
        <div className="w-full flex-none py-12 px-8 sm:w-2/6 lg:px-12">
          <nav className="mb-8 space-y-2 text-lg">
            {navigation1.map((item) => (
              <Link className="block" key={item.name} to={item.to}>
                {item.name}
              </Link>
            ))}
          </nav>
          <span className="flex items-center justify-center">
            <Link to="#">
              <span className="sr-only">View us on Instagram</span>
              <Instagram className="h-12 w-12" />
            </Link>
          </span>
        </div>
        <div className="hidden w-full flex-none py-12 px-8 sm:block sm:w-2/6 lg:px-12"></div>
        <div className="w-full flex-none justify-center space-y-4 py-10 px-8 sm:w-2/6 lg:px-12">
          <figure>
            <img
              className="mx-auto h-12 w-12 fill-white"
              src="/logo.svg"
              alt="Remix Simple Stack"
            />
          </figure>
          <aside>
            This is a whole lot of text that helps describe what the website is
            or maybe a disclaimer or what not.
          </aside>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col flex-wrap items-center justify-center text-sm sm:inline-flex sm:flex-row sm:space-x-8">
          <nav className="space-x-8">
            {navigation2.map((item) => (
              <Link key={item.name} to={item.to}>
                {item.name}
              </Link>
            ))}
          </nav>
          <span>© {date.getFullYear()} Remix Simple Stack</span>
        </div>
      </div>
    </footer>
  );
}
