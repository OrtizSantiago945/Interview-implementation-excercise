import express, { Application } from "express";

import foldersRoutes from "./routes/foldersRoutes";
import tasksRoutes from "./routes/tasksRoutes";

import morgan from "morgan";
import cors from 'cors';

class Server {

    public app : Application
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() : void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());

        // json formats
        this.app.use(express.json());
        // html formats
        this.app.use(express.urlencoded({ extended : false }));
    }

    routes() : void{
        this.app.use('/api/folders', foldersRoutes);
        this.app.use('/api/tasks', tasksRoutes);
    }

    start() : void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();