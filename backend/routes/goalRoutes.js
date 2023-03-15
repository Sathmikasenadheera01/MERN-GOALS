const express = require('express')
const router = express.Router()
const { getGolas, setGoal, updateGolas, deleteGolas } = require('../controllers/goalController')

router.get('/', getGolas )

router.post('/', setGoal)

router.put('/:id', updateGolas)

router.delete('/:id', deleteGolas)

module.exports = router