import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router,private db: AngularFirestore) {}

  signupUser(email: string, password: string,name: string,number: string) {
   //this.Loading();
    firebase.auth().createUserWithEmailAndPassword(email, password)  .then((result) => {
    //  this.dismissLoading()
      this.db.collection('users').doc(result.user.uid).set({ fullName: name,Number:number })
      .then(() => {
        
        this.router.navigateByUrl('/home')
      })
    })
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
     
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut().then(
        response=>{
            this.router.navigate(['/']);
        }
    )
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
//   async presentLoading() {
//     <div class="spinner-border" role="status">
//   <span class="sr-only">Loading...</span>
// </div>
//   }

 Loading() {
    //template:'<app-loader></app-loader>';
    //console.log("asasas");
   }

}
