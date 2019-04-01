import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
   private profile:any[];

  constructor(private profileService: ProfileService) { 
    // this.profileService.getProfileInfo().subscribe(profile => {
    //   console.log(profile);
    //   this.profile = profile;
    // });

   
  }

  ngOnInit() {
  }
 title = 'GITHUB SEARCH';

 
}
