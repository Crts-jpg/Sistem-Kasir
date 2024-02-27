const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/barang', async (req, res) => {
  try {
    const Tbarang = await prisma.barang.findMany();
    res.status(200).json({ message: "berhasil menampilkan barang", data: Tbarang });
  } catch (error) {
    console.error("gagal menampilkan barang",error)
    res.status(500).json({ message: "gagal menampilkan barang" })

  }
})

module.exports = router;