import Requirement from "../models/requirement.js";

export const createRequirement = async (req, res) => {
  try {
    const newReq = await Requirement.create(req.body);
    res.status(201).json(newReq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllRequirements = async (req, res) => {
  const data = await Requirement.find();
  res.json(data);
};

export const getByType = async (req, res) => {
  const data = await Requirement.find({ hireType: req.params.type });
  res.json(data);
};