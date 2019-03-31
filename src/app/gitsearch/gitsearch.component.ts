import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 title = 'GITHUB SEARCH';

 btnClick(){
  this.router.navigate(['/next-page']);
}
}
