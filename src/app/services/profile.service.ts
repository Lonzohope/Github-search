import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from "../user";
import { Repo } from '../repo'

@Injectable()

export class ProfileService {
  private repo:string;
 baseUrl:string="https://api.github.com";
   
 username:string;
private clientid = '6d125028f09d368b763d';
private clientsecret = '10132e346328162cedb866d3c1def480f5c71774';

  constructor(private http:HttpClient) {
   this.username = "Lonzohope";
   }

   getProfileInfo(username:string):Observable<User[]>{
     return this.http.get<User[]>(this.baseUrl+"/users/"+ username)
   }

   getRepo(username:string):Observable<Repo[]>{
     return this.http.get<Repo[]>(this.baseUrl+"/users/"+ username + "/repos")
   }
}
