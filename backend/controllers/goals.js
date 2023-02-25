const asyncHandler = require("express-async-handler");
const Goal = require("../models/goals.js");

//* @desc : Get Goals
//* @route : GET /api/goals
//* @access : Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//* @desc : Set Goals
//* @route : POST /api/goals
//* @access : Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  } else {
    const goal = await Goal.create({
      text: req.body.text,
    });
    res.status(200).json(goal);
  }
});

//* @desc : Update Goals
//* @route : PUT /api/goals
//* @access : Private
const updateGoals = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  } else {
    const updatedGoal = await Goal.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(updatedGoal);
  }
});

//* @desc : Delete Goals
//* @route : DELETE /api/goals
//* @access : Private
const deleteGoals = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);
  if(!goal){
    res.status(400);
    throw new Error("Goal Not Found");
  }
  else {
    await goal.remove();
    res.status(200).json({id});
  }
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
