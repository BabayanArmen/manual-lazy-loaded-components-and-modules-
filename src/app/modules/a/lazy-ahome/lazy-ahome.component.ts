import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-ahome',
  templateUrl: './lazy-ahome.component.html',
  styleUrls: ['./lazy-ahome.component.scss']
})
export class LazyAHomeComponent implements OnInit {

  constructor(private router: Router) { }

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
