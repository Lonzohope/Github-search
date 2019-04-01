import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
   private profile:any[];

  constructor(private profileService: ProfileService, private http: HttpClient ) { 
   

   
  }
  getProfileInfo(){


  }



  ngOnInit() {
  }
 title = 'GITHUB SEARCH';

 
}
