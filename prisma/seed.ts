import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.note.create({
    data: {
      title: "My first note",
      body: "This is my first note.",
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "This is my second note.",
    },
  });

  console.log(`Database has been seeded.`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
