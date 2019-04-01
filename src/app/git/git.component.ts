import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { User } from "../user"
@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
   user:User[];
  profileName:string
  constructor(private profileService: ProfileService, private http: HttpClient ) { 
   

   
  }
  getProfileInfo() {
  this.profileService.getProfileInfo().subscribe((response)=>{
  this.user=response;
},
(error)=>{
  
}
  )
  }


  ngOnInit() {
  }
 title = 'GITHUB SEARCH';

 
}
