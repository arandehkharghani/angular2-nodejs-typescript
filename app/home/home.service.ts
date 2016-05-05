import { Http } from 'angular2/http';
import { Injectable } from 'angular2/core';

@Injectable()
export class HomeService{
    
    constructor(private http: Http){        
    }
    
  //  getMessages(){
   //     return this.http.get("/api/messages").map(res => res.json());    
  //  }
}