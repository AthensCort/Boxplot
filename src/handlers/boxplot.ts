import { Request, Response, NextFunction } from "express";
import {calculateBoxplotStats} from "../controllers/boxplot";
//cuando importas desde un modulo de common js. el requeire lo puedes asignar auna
//varable
class BoxplotHandler {
  public async getBoxplot(req: Request, res: Response): Promise<void> {
    try {
      const stats = await calculateBoxplotStats();
      res.status(200).json(stats);
    } catch (error) {
        if (error instanceof Error){
            res.status(500).json({message:error.message})
        }else{
            res.status(500).json({ error: "PAM CRASHEADO" });
        }
    }
  }
}

export default new BoxplotHandler();
