import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardOption, Card } from 'src/app/interfaces/small-interfaces/small-interfaces';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private router: Router,
      private AppService: AppService
    ) { }

  Area: string = "Página inicial";



  ngOnInit(): void {
  }

  navigateTo(route: string){
    this.router.navigate([route]);
  }
}
