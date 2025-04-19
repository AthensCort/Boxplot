import { Router } from "express";
import Handler  from "../handlers/boxplot";

const router = Router();

router.get("/boxplot", Handler.getBoxplot);
export default router;
