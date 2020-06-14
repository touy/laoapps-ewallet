import { Request, Response, NextFunction, Router, Application } from 'express';

export class Routers {
    constructor() {

    }
    routing(app: Application) {
        app.get('/', (req: Request, res: Response) => {
            res.send('ok');
        });
        app.get('/hello', (req: Request, res: Response) => {
            res.send('hello');
        });

        app.get('/hellow', (req: Request, res: Response) => {
            let user = req.query.user;
            console.log(req.query);
            
            res.send('hello '+user);
        });

        app.get('/hello/:user', (req: Request, res: Response) => {
            let user = req.params.user;
            res.send('hello '+user);
        });
        app.get('/hello',this.getHello)
        .post('/hello/:id',this.postHello);
    }
    getHello(req: Request, res: Response){

    }
    postHello(req: Request, res: Response){
        let id = req.params.id;
            let user = req.body; //post
            console.log('id',id);
            
            console.log(user);
            
            res.json({id,user,message:'hello'});
    }
}
