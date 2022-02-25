import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadService {
  private lazyMap: Map<string, Promise<unknown>> = new Map();

  constructor() {}

  getLazyModule(key: string): Promise<unknown> | any {
    return this.lazyMap.get(key);
  }

  loadLazyAModule(): Observable<number | void> {
    return of(1).pipe(
      tap(() => {
        this.lazyMap.set(
          'lazyA',
          import('../modules/a/a.module').then(m => m.AModule)
        );
      })
    );
  }

  loadLazyBModule(): Observable<number | void> {
    return of(1).pipe(
      tap(() => {
        this.lazyMap.set(
          'lazyB',
          import('../modules/b/b.module').then(m => m.BModule)
        );
      })
    );
  }

}
