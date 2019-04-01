import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { User } from "../user"
import { ReplaceSource } from 'webpack-sources';
import { Response } from 'selenium-webdriver/http';
import { Repo } from "../repo"
@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css'],
  providers:[ProfileService]
})
export class GitComponent implements OnInit {
  users:User[];
  repos:Repo[];
  profileName:string
  username:string="";
  constructor(private profileService: ProfileService, private http: HttpClient ) { 
   

   
  }
  public getProfileInfo() {
  this.profileService.getProfileInfo(this.username).subscribe((response)=>{
    this.users=response
},
(error)=>{
  
}
  )
  }
  public getRepo(){
    this.profileService.getRepo(this.username).subscribe((response)=>{
      this.repos=response
      
    })
    }


  ngOnInit() {
  }
 title = 'GITHUB SEARCH';

 
}
