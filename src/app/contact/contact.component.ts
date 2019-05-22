import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { GlobalService } from 'src/app/global-service/global.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private global: GlobalService, private db:AngularFirestore,private http:Http) { }

  ngOnInit() {
  }
 StoreMessages(form: NgForm): void {
    const Data= [{name: form.value.name,email:form.value.email,
      phone:form.value.phone ,message:form.value.message}]
     
      console.log(Data);
this.global.storeMessages(Data).subscribe(
  (response)=>console.log(response),
  (error)=>console.log(error)
);

}
}
