import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})

export class ProfileService {
private username:string;
private clientid = '';
private clientsecret = '';

  constructor(private http:HttpClient) {

   }
}
