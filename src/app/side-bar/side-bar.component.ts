import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
   openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
    document.getElementById("mySidepanel").style.cssFloat="right";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
   closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  onLogout() {
    this.authService.logout();
  
  }
  

}
