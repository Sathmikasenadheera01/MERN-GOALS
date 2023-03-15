const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')

const getGolas = asyncHandler(async(req,res) => {

    const goals = await Goal.find({})

    res.status(200).json(goals)
})

const setGoal = asyncHandler(async(req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error("please add a text field")
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

const updateGolas = asyncHandler(async(req,res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found!!!')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedGoal)
})

const deleteGolas = asyncHandler(async(req,res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found!!!')
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedGoal)
})

module.exports = {
    getGolas,
    setGoal,
    updateGolas,
    deleteGolas
}