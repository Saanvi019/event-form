import express from "express";
import {
  createRequirement,
  getAllRequirements,
  getByType,
} from "../controllers/requirementController.js";

const router = express.Router();

router.post("/", createRequirement);
router.get("/", getAllRequirements);
router.get("/:type", getByType);

export default router;