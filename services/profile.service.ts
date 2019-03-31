import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ProfileService {
   
private username:string;
private clientid = '6d125028f09d368b763d';
private clientsecret = '10132e346328162cedb866d3c1def480f5c71774';

  constructor(private http:HttpClient) {
   console.log("service is now ready");
   this.username = "Lonzohope";
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/Lonzohope" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
 
   }
}
