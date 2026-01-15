import {crone} from "@/controllers/CroneController.js";
import express from "express";
const router = express.Router();
router.get('/crone', crone);

module.exports = router;