import { Request, Response, NextFunction } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response) {

        const { name } = req.body;

        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({ name });

        return res.json(category);
    }
}


export { CreateCategoryController }