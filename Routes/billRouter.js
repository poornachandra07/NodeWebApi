const express = require('express')
const router = express.Router()

const { getBills, addBills, updateBills, deleteBills, getBillsById } = require('../Controller/billController')

router.get('/', getBills)
router.get('/:id', getBillsById)

router.post("/", addBills)

router.put("/:id", updateBills)

router.delete("/:id", deleteBills)

module.exports = router