import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useCatch } from "@remix-run/react";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";

import type { Note } from "~/models/note.server";
import { getNote } from "~/models/note.server";

type LoaderData = {
  note: Note;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.noteId, "noteId not found");
  const note = await getNote({ id: params.noteId });

  if (!note) {
    throw new Response("Note not found", { status: 404 });
  }
  return json<LoaderData>({ note });
};

export default function NoteDetailsPage() {
  const data = useLoaderData();

  return (
    <div>
      <h1>{data.note.title}</h1>
      <p>{data.note.body}</p>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <>
        <h1>404</h1>
        <div>Note not found</div>
      </>
    );
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
