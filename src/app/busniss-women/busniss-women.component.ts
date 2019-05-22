import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList  } from "angularfire2/database"; 
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-busniss-women',
  templateUrl: './busniss-women.component.html',
  styleUrls: ['./busniss-women.component.css']
})
export class BusnissWomenComponent implements OnInit {

  usersCollection;
  users: Observable<any[]> ;

  constructor(db2: AngularFireDatabase,afs:AngularFirestore,private authService: AuthService) {
    this.usersCollection = afs.collection<any>('users')
    this.users = this.usersCollection.valueChanges()
  }

  ngOnInit() {
 
  }
}
