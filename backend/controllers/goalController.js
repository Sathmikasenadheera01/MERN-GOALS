const asyncHandler = require('express-async-handler')

const getGolas = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Get Goals"})
})

const setGoal = asyncHandler(async(req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error("please add a text field")
    }

    res.status(200).json({message:"Set Goal"})
})

const updateGolas = asyncHandler(async(req,res) => {
    res.status(200).json({message:`update goal ${req.params.id}`})
})

const deleteGolas = asyncHandler(async(req,res) => {
    res.status(200).json({message:`delete goal ${req.params.id}`})
})

module.exports = {
    getGolas,
    setGoal,
    updateGolas,
    deleteGolas
}