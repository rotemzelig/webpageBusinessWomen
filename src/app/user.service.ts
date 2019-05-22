import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from "angularfire2/database"; 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase
  ) { }

  public getUsers() {
   
    return this.userList= this.db.list('/users');
  }
}