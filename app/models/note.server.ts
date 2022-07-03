import type { Note } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Note } from "@prisma/client";

export function getNote({ id }: Pick<Note, "id">) {
  return prisma.note.findFirst({
    where: { id },
  });
}

export function getNotes() {
  return prisma.note.findMany({
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function getLastNote() {
  return prisma.note.findMany({
    select: { id: true },
    orderBy: { updatedAt: "desc" },
    take: 1,
  });
}
