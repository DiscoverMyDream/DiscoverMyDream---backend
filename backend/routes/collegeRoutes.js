import express from "express";
const router = express.Router();
import {
  getColleges,
  getCollegeById,
  deleteCollege,
  createCollege,
  updateCollege,
} from "../controllers/collegeController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getColleges).post(protect, admin, createCollege);
router
  .route("/:id")
  .get(getCollegeById)
  .delete(protect, admin, deleteCollege)
  .put(protect, admin, updateCollege);

export default router;
