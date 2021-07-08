import { Request, Response } from "express";

import db from "../database";

class FoldersController {
    
    public async list(req : Request, res : Response){
        const folders = await db.query('SELECT * FROM folders');
        res.json(folders);
    }

    public async create(req : Request, res : Response){
       await db.query('INSERT INTO folders SET ?', [req.body]);
       res.json({Message: 'Created'});
    }

    public async update(req : Request, res : Response){
        const { id } = req.params;
        await db.query('UPDATE folders SET ? WHERE id=?', [req.body, id]);
        res.json({Message: 'Updated'});
    }

    // deletes on cascade
    public async delete(req : Request, res : Response){
        const { id } = req.params;
        await db.query('DELETE FROM folders WHERE id=?', [id]);
        res.json({Message: 'Deleted'});
    }
}

export const foldersController = new FoldersController();