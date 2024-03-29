const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/tambah', async (req, res) => {
  const { name, price, id } = req.body;
  try {
    const Tbarang = await prisma.barang.create({
      data: {
        id,
        name,
        price,
      }
    });

    res.status(201).send({ message: "berhasil menambahkan barang", data: Tbarang });
  } catch (error) {
    console.error("gagal menambahkan barang",error)
    res.status(500).json({ message: "gagal menambahkan barang" })

  }
})

module.exports = router;