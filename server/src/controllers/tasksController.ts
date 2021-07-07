import { Request, Response } from "express";

import db from "../database";

class TasksController {
    
    public async list(req : Request, res : Response){
        const tasks = await db.query('SELECT * FROM tasks');
        res.json(tasks);
    }

    public async create(req : Request, res : Response){
       await db.query('INSERT INTO tasks SET ?', [req.body]);
       res.json({Message: 'Created'});
    }

    public async update(req : Request, res : Response){
        const { id } = req.params;
        await db.query('UPDATE tasks SET ? WHERE id=?', [req.body, id]);
        res.json({Message: 'Updated'});
    }

    public async delete(req : Request, res : Response){
        const { id } = req.params;
        await db.query('DELETE FROM tasks WHERE id=?', [id]);
        res.json({Message: 'Deleted'});
    }
}

export const tasksController = new TasksController();