import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private router: Router,
    ) { }

  Area: string = "Página inicial";



  ngOnInit(): void {
  }

  navigateTo(route: string){
    this.router.navigate([route]);
  }
}
