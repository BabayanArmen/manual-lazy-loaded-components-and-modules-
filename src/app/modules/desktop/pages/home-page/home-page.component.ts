import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
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
  async loadBcomponenet() {
    this.vcr.clear()
    const { LazyBComponent } = await import('../lazy-b/lazy-b.component')
    this.vcr.createComponent(LazyBComponent)
  }

  //// manual lazy A modul loading
  loadLazyModule(): void {
    this.lazyLoaderService.loadLazyBModule().subscribe(() => {
      const config = this.router.config;
      config.push({
        path: 'lazyB',
        loadChildren: () => this.lazyLoaderService.getLazyModule('lazyB')
      });
      this.router.resetConfig(config);
      this.router.navigate(['lazyB'], {skipLocationChange: true});
    });
  }

}
