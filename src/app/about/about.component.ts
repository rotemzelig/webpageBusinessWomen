import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { GlobalService } from '../global-service/global.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private authService: AuthService, public global: GlobalService,
     private db:AngularFirestore,private router: Router) { }

  ngOnInit() {
    this.db.collection("Social").doc("SocialEdit").get().toPromise().then(result => {
      const actualData = result.data().Data
      this.global.followers = actualData.followers;
      this.global.participants= actualData.participants;
      this.global.events=actualData.events;
      this.global.rooms=actualData.rooms;
      this.global.business=actualData.business;
      this.router.navigate(['/about']);
     
    })
  }
 
 
}