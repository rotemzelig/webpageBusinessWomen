import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-service/global.service';
import {Response}from '@angular/http'
import { Message } from './messge.model';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  Message=[];
  length;
  constructor(private global:GlobalService) {
  
   }
  ngOnInit() {

    this.GenaerateMessages();
  }
  GenaerateMessages(){
    this.global.getMessages().subscribe(
      Message=>this.Message=Message
    );
  }

}

