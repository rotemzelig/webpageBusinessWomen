
 import {NgForm} from '@angular/forms';


import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import{LoaderComponent} from '../loader/loader.component'

import { Router } from '@angular/router';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent  {

  
  Role: string = '';
   fullName : string ='';
     email : string=  '';
     password : string='123123';
     number: string='';
     Message :string= '';
     ErrorMessage :string= '';
    
  

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
   
    this.Role = event.target.value;
   
    
  }

  constructor(
    private bambi: AngularFireAuth,
    private db: AngularFirestore,
    
    
    private router: Router) { }
    

  createNewUser(form: NgForm): void {
    if(form.invalid) {
      return
    }
    const fullName = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const number=form.value.phone;
    let UserRole=this.Role;
   
    if(UserRole==="")
    UserRole='user';
 
   const Data= ({fullName: fullName,Email:email,Password:password ,Number:number, Role:UserRole})
  
    this.bambi.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.db.collection('users').doc(result.user.uid).set(Data)
      .then(() => {
        
        this.Message  ="נוצר משתמש חדש במערכת";
        debugger;
      
        setTimeout(() => 
        {
          this.sendEmailVerification();
            this.router.navigate(['/']);
        },
        4000);
      })
    })
  
  
 .catch(error=> {

 
  const errorCode = error.code;

  if (errorCode == 'auth/email-already-in-use') {

    this.ErrorMessage='דואר אלקטרוני כבר רשום במערכת ';
    return;
           
  }
   else if(errorCode == 'auth/weak-password') {
    this.ErrorMessage='סיסמה חלשה מדי ';
  }
  this.ErrorMessage="";
 

})

}
async sendEmailVerification() {
await this.bambi.auth.currentUser.sendEmailVerification()
this.router.navigate(['/']);
}


}
