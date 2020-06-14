import express from 'express';
import * as cors from 'cors';
import * as BodyParser from 'body-parser';
import {Routers} from './routers/routers';
export class App{
    app: express.Application ;
    routers: Routers;
    constructor(){
        this.app = express();
        this.routers = new Routers();
        this.config();
    }
    config(){
        this.app.use(BodyParser.json());
        this.app.use(cors.default());
        this.app.options('*', cors.default());
        this.routers.routing(this.app);
        
    }

}
export default new App().app;



