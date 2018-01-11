import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      //TODO: Send to an error page and add a back button to navigate to products list page.
      alert("Invalid product Id");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
