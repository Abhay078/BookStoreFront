import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthGuardService, private router: Router) {}
  canActivate() {
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.Authguardservice.gettoken(); 
    
  }
  
}
