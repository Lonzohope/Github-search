import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import { User } from "../user";
import { Repo } from '../repo'

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private repo:string;
  private baseUrl:string;
   
private username:string;
private clientid = '6d125028f09d368b763d';
private clientsecret = '10132e346328162cedb866d3c1def480f5c71774';

  constructor(private http:HttpClient) {
   console.log("service is now ready");
   this.username = "Lonzohope";
   }

   getProfileInfo(){
     return this.http.get<repo[]>(this.baseUrl+"/users/"+username+"/repos")
   }
}
