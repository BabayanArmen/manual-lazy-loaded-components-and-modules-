import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadService } from 'src/app/services/lazy-load.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private vcr: ViewContainerRef,
    private router: Router,
    private lazyLoaderService: LazyLoadService) { }

  ngOnInit(): void {
  }

  //// lazy component loading
  async loadAComponent() {
    this.vcr.clear()
    const { LazyAComponent } = await import('../lazy-a/lazy-a.component')
    this.vcr.createComponent(LazyAComponent)
  }

  //// manual lazy A modul loading
  loadModuleA(): void {
    this.lazyLoaderService.loadLazyAModule().subscribe(() => {
      const config = this.router.config;
      config.push({
        path: 'lazyA',
        loadChildren: () => this.lazyLoaderService.getLazyModule('lazyA')
      });
      this.router.resetConfig(config);
      this.router.navigate(['lazyA'], {skipLocationChange: true});
    });
  }

}
