import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     return true;
        // }

        //Todo add session and security calls and hooks
       // if(this.session.isAuthenticated){
            return true;
        //}
        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
       // return false;
    }
}
