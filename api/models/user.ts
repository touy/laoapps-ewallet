import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

export interface WalletUserDocument extends mongoose.Document {
    userName:string;
    password:string;
    email:string;
    phoneNumber:number;
}
export interface IWalletUser extends WalletUserDocument {

}
export interface WalletUserModel extends mongoose.Model<IWalletUser>{

}
export const walletUserSchema = new Schema({
    userName:{type:String},
    password:{type:String},
    email:{type:String},
    phoneNumber:{type:Number},
})