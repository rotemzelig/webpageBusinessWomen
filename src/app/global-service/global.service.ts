import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Response}from '@angular/http'
import { Observable } from 'rxjs';
import {Message}from '../messages/messge.model'

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GlobalService {

  public followers :string='';
  public participants:string='';
  public business:string='';
  public rooms:string='';
  public events:string='';
  public Message:string='';
  constructor(private http:Http) { 


    }
    storeMessages(Data: any []){
     return this.http.post('https://bigproject-dd88e.firebaseio.com/data.json',Data);
  }
  getMessages(){
    return this.http.get('https://bigproject-dd88e.firebaseio.com/data.json')
    .map((response:Response)=>{
const data: Message[]=response.json();
return data;
    }
    
    ).catch(
      (error:Response)=>{
        
        return Observable.throw('something went wrong');
      }

    );
  }
  
}
