import {IPerson,Person} from './models/person';
import {IUser,User} from './models/user';
export class App{
    //user: IUser = new User('touy','123456',8562055516321,'touya.ra@gmail.com');
    user:User={} as User;
    constructor(){
        
    }
    createUser(userName:string,password:string,phoneNumber:number,email:string):IUser{
        this.user = new User(userName,password,phoneNumber,email);
        return this.user;
    }
    createPersonForUser(user:User,person:IPerson):IUser{
        user.setPerson(person);
        this.user = user;
        return this.user;
    }
    show(){
        console.log('show app', this);
        
    }
}
var app:App = new App();
app.show();