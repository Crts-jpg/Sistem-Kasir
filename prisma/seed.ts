import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    
    
    const barang1 = prisma.barang.create({
      data: {
        id: "1", // Add the required 'id' property
        name: "Buku",
        price: 5000,
      },
    });

    const barang2 = prisma.barang.create({
      data: {
        id: "2", // Add the required 'id' property
        name: "Pensil",
        price: 1000,
      },
    });
    console.log({ barang1, barang2 });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {    
    await prisma.$disconnect();
  });


  // i dont think this is the right way to seed data, but it works for now
