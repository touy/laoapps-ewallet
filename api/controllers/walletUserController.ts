import { Request, Response, NextFunction, Router, Application } from 'express';
import * as mongoose from 'mongoose';
import {IWalletUser,WalletUserDocument,WalletUserModel,walletUserSchema} from '../models/user';
export class WalletUserController{
    docWalletUser = mongoose.model<IWalletUser, WalletUserModel>('WalletUser', walletUserSchema);
    constructor(){

    }
// Query
    // /user?userName=mr.A
    getUserDetails(userName:string):Promise<any>{

        console.log('user id is ',userName);
        return new Promise<any>((resolve, reject) => {
            this.docWalletUser.findOne({
                userName
            }).then(r=>{
                console.log('found username',r);
                resolve(r);
            }).catch(e=>{
                console.log('finding user details error',e);
                reject(e);
            });
          });


       
    }
    updateUserDetails(id:string,user:IWalletUser):Promise<any>{
        return new Promise((resolve,reject)=>{
            if(id){
                this.docWalletUser.findByIdAndUpdate(id,{password:user.password}).then(r=>{
                    console.log('updating succeeded',r);
                    resolve(r)
                }).catch(e=>{
                    console.log('finding user id error',e);
                   reject(e);
                });
            }else{
                resolve({});
            }
        }); 
    }
    deleteUserDetails(id:string):Promise<any>{
        return new Promise((resolve,reject)=>{
            this.docWalletUser.findByIdAndDelete(id).then(r=>{
                console.log('deleting user details error',r);
                resolve(r);
            }).catch(e=>{
                console.log('deleting user details error',e);
                 reject(e);
            })
        });
        
    }
    createUser(user:IWalletUser):Promise<any>{
        return new Promise<any>((resolve,reject)=>{
            if(!user.userName||!user.password){

                resolve({status:'error',error:'username or password empty',json:user});
            }else{
                user.save().then(r=>{
                    console.log('finding user details error',r);            
                    resolve(r);
                }).catch(e=>{
                    console.log('finding user details error',e);
                    reject(e);
                });
            }
        });
       
        
    }
}