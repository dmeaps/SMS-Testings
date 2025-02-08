import {Router} from "express";
import {getMacAddress} from "../controllers/macController.js";
const router = Router();
router.get("/mac",getMacAddress);
export default router;