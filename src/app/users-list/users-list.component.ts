import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList  } from "angularfire2/database"; 
import { AngularFirestore } from '@angular/fire/firestore';
import {UserService} from '../user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersCollection;
  users: Observable<any[]> ;

  constructor(db2: AngularFireDatabase,afs:AngularFirestore) {
    this.usersCollection = afs.collection<any>('users')
    this.users = this.usersCollection.valueChanges()
  }

  ngOnInit() {
 
   }
  

}
