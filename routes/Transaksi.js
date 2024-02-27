const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/transaksi', async (req, res) => {
    try {
        const { barangId, amount } = req.body;

        if (!barangId || !amount || typeof amount !== 'number' || amount < 1) {
            return res.status(400).json({ message: "data transaksi tidak valid" });
        }

        const barang = await prisma.barang.findUnique({
            where: {
                id: barangId
            }
        });

        if (!barang) {
            return res.status(404).json({ message: "barang tidak ditemukan" });
        }

        const total = barang.price * amount;

        const transaksi = await prisma.transaksi.create({
            data: {
                barangId,
                amount,
                total
            }
        });

        res.status(201).json({ message: "berhasil disimpan transaksi", data: transaksi });

    } catch (error) {
        console.error("gagal menyimpan transaksi", error);
        res.status(500).json({ message: "gagal menyimpan transaksi" });
    }
})

module.exports = router