import { Router } from "express";
import { foldersController } from "../controllers/foldersController";

class FoldersRoutes {

    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/', foldersController.list);
        this.router.post('/', foldersController.create);
        this.router.put('/:id', foldersController.update);
        this.router.delete('/:id', foldersController.delete);
    }
}

const foldersRoutes = new FoldersRoutes();
export default foldersRoutes.router;