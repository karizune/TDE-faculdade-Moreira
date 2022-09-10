import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user.interface';
import { AppService } from './services/app.service';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TDE';

  constructor(
    private router: Router,
    private userService: UserService,
    private AppService: AppService
  )
  {}

  user: User = this.userService.GetActualUser();
  toggled: boolean = this.AppService.GetSideNavBar();
  isLoginPage: boolean = true;

  ngOnInit(): void{
    let validUser: boolean = this.userService.VerifyUser(this.user);
    let path: string = '';

    if(!validUser){
      path = '/login';
    }
    else if(!this.user.KeepLogin){
      path = '/login';
    }
    else if(this.AppService.getLastPath().length > 0){
      path = this.AppService.getLastPath();
    }
    else{
      path = '/home'
    }

    this.isLoginPage = path === '/login';
    this.router.navigate([path]);
  }

  toogleSideNav(): boolean{
    return this.AppService.NavBarToggle();
  }
}
