import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resenha',
  templateUrl: './resenha.component.html',
  styleUrls: ['./resenha.component.css']
})
export class ResenhaComponent implements OnInit {

  constructor() { }

  Area: string = "Resenha sobre Gestão de TI";

  ngOnInit(): void {
  }

}
