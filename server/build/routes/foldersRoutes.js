"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const foldersController_1 = require("../controllers/foldersController");
class FoldersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', foldersController_1.foldersController.list);
        this.router.post('/', foldersController_1.foldersController.create);
        this.router.put('/:id', foldersController_1.foldersController.update);
        this.router.delete('/:id', foldersController_1.foldersController.delete);
    }
}
const foldersRoutes = new FoldersRoutes();
exports.default = foldersRoutes.router;
