import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IQ-soft task';

  screatWidth = window.innerWidth

  constructor(private router: Router) {
    this.isMobileOrDesktop()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileOrDesktop()
  }

  isMobileOrDesktop() {
    this.screatWidth = window.innerWidth
    if(this.screatWidth <= 1200) {
      this.router.navigate(['/mobile'], {skipLocationChange: true})
    } else {
      this.router.navigate(['/desktop'], {skipLocationChange: true})
    }
  }

}
