import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { GlobalService } from 'src/app/global-service/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css']
})
export class EditingComponent implements OnInit {

  constructor(private global: GlobalService, private db:AngularFirestore,private router: Router) { }

  ngOnInit() {
  }
  public onEditing(form: NgForm): void {
    const Data= ({followers: form.value.Followers,participants:form.value.partisipants,
      events:form.value.events ,rooms:form.value.rooms, business:form.value.Busniss})
     this.db.collection("Social").doc("SocialEdit").set({
        Data
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    this.db.collection("Social").doc("SocialEdit").get().toPromise().then(result => {
      const actualData = result.data().Data
      this.global.followers = actualData.followers
      this.global.participants=form.value.partisipants;
      this.global.events=form.value.events;
      this.global.rooms=form.value.rooms;
      this.global.business=form.value.Busniss;
      this.router.navigate(['/about']);
     
    })
  }

}
