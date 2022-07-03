import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { getNotes } from "~/models/note.server";

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Sidebar from "~/components/Sidebar";

type LoaderData = {
  notes: Awaited<ReturnType<typeof getNotes>>;
};

export const loader: LoaderFunction = async () => {
  const notes = await getNotes();
  return json<LoaderData>({ notes });
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-gray-500 to-gray-700">
          <div className="mx-auto flex max-w-screen-2xl items-center justify-center px-2 py-56 sm:px-6 lg:px-8">
            <section>
              <h1 className="text-center font-acuminCondensed text-6xl font-semibold uppercase text-white sm:text-7xl">
                Remix Simple Stack
              </h1>
            </section>
          </div>
        </div>
        <article className="mx-auto flex max-w-screen-2xl flex-col flex-wrap py-8 px-2 sm:px-6 md:flex-row md:flex-nowrap lg:px-8">
          <div className="flex-1 md:mr-8 lg:mr-12">
            <h2 className="mb-4 font-acuminCondensed text-3xl font-semibold">
              Notes
            </h2>
            {data.notes.length === 0 ? (
              <p className="p-4">No notes yet.</p>
            ) : (
              <ul>
                {data.notes.map((note) => (
                  <li key={note.id}>
                    <Link to={`notes/${note.id}`}>{note.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Sidebar />
        </article>
      </main>
      <Footer />
    </>
  );
}
