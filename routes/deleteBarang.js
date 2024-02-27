const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.delete('/barang/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const Tbarang = await prisma.barang.delete({
      where: {
        id: parseInt(id)
      }
    });
    res.status(200).json({ message: "berhasil menghapus barang", data: Tbarang });
  } catch (error) {
    console.error("gagal menghapus barang",error)
    res.status(500).json({ message: "gagal menghapus barang" })

  }
})

module.exports = router;