import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TDE';

  constructor(
    private router: Router,
    private AppService: AppService
  )
  {}

  ngOnInit(): void{
    let lastPath: string = this.AppService.getLastPath();

    if(lastPath.length > 0){
      this.router.navigate([lastPath])
    }
    else{
      this.router.navigate(['/home']);
    }
  }

  toogleSideNav(): boolean{
    return this.AppService.NavBarToggle();
  }
}
