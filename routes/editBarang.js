const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.put('/barang/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  try {
    const Tbarang = await prisma.barang.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        price,
        stock
      }
    });
    res.status(200).json({ message: "berhasil mengedit barang", data: Tbarang });
  } catch (error) {
    console.error("gagal mengedit barang",error)
    res.status(500).json({ message: "gagal mengedit barang" })

  }
})

module.exports = router;