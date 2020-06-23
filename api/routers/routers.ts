import { Request, Response, NextFunction, Router, Application } from 'express';
import * as mongoose from 'mongoose';
import {WalletUserController} from '../controllers/walletUserController';
import { IWalletUser, WalletUserModel, walletUserSchema } from '../models/user';

export class Routers {
    walletUserController = new WalletUserController();
    docWalletUser = mongoose.model<IWalletUser, WalletUserModel>('WalletUser', walletUserSchema);
    constructor() {
        
    }
    routing(app: Application) {
    // CRUD  = Create , Read , Update , Delete
    // user

    // read user details
    app.get('/user/:id',this.getUserDetails.bind(this))
    // update
    .post('/user',this.updateUserDetails.bind(this))
    // delete
    .delete('/user/:id',this.deleteUserDetails.bind(this))
    // create
    .put('/user',this.createUser.bind(this))
    }
    // Query
    // /user?userName=mr.A
    getUserDetails(req:Request,res:Response){
        let userName = req.params['id'];
        console.log('user id is ',userName);
        this.walletUserController.getUserDetails(userName).then(r=>{
            const user = <IWalletUser> r;
            res.send(user);
        }).catch(e=>{
            res.send(e);
        });
    }
    updateUserDetails(req:Request,res:Response){
        let id = req.query.id+'';
        const user = req.body as IWalletUser;
        this.walletUserController.updateUserDetails(id,user).then(r=>{
            res.send(user);
        }).catch(e=>{
            res.send(e);
        });

        
        
    }
    deleteUserDetails(req:Request,res:Response){
        const id = req.params['id'];
        this.walletUserController.deleteUserDetails(id).then(r=>{
            res.send(r);
        }).catch(e=>{
            res.send(e);
        });
    }
    createUser(req:Request,res:Response){
        const user =new this.docWalletUser(req.body);
        this.walletUserController.createUser(user).then(r=>{
            res.send(r);
        }).catch(e=>{
            res.send(e);
        });

        
    }
}
