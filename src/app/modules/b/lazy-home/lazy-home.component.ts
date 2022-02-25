import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-home',
  templateUrl: './lazy-home.component.html',
  styleUrls: ['./lazy-home.component.scss']
})
export class LazyHomeComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    if(window.innerWidth <= 1200) {
      this.router.navigate(['/mobile'], {skipLocationChange: true})
    } else {
      this.router.navigate(['/desktop'], {skipLocationChange: true})
    }
  }

}
