"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = require("../controllers/tasksController");
class TasksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', tasksController_1.tasksController.list);
        this.router.post('/', tasksController_1.tasksController.create);
        this.router.put('/:id', tasksController_1.tasksController.update);
        this.router.delete('/:id', tasksController_1.tasksController.delete);
    }
}
const tasksRoutes = new TasksRoutes();
exports.default = tasksRoutes.router;
