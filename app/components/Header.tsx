import { Link } from "@remix-run/react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation: { name: string; to: string }[] = [
  { name: "Page 1", to: "/page-1" },
  { name: "Page 2", to: "/page-2" },
];

export default function Header() {
  return (
    <Disclosure as="header" className="shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center sm:mr-auto">
                  <Link to="/">
                    <figure>
                      <img
                        className="h-8 w-8"
                        src="/logo.svg"
                        alt="Remix Simple Stack"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <nav className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="rounded-md px-3 py-2 text-sm text-gray-500 hover:text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  to="/"
                  className="rounded-md bg-gray-700 py-2 px-4 font-acuminCondensed text-sm font-semibold uppercase text-white"
                >
                  <span className="sr-only">Open Button</span>
                  Button
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <nav className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className="block rounded-md px-3 py-2 text-base hover:bg-gray-200"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
