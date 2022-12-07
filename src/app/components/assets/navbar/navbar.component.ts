import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOption } from '../../../interfaces/small-interfaces/small-interfaces';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private AppService: AppService,
    private router: Router
  ) { }

  @Input() ActualArea: string = 'ESQUECEU DE PASSAR O INPUT DE AREA SEU CORNO';
  @Input() AreaAction: Function = () => {};
  @Input() HaveAreaAction: boolean = false;
  @Input() AreaActionTitle: string = '';

  loading: Boolean = false;

  menuOptions: MenuOption[] = [
    {
      Title: "Início",
      Function: () => this.router.navigate(['home'])
    },
    {
      Title: "Entrevista",
      Function: () => this.router.navigate(['entrevista'])
    },
    {
      Title: "Resenha",
      Function: () => this.router.navigate(['resenha'])
    },
    {
      Title: "ITIL V4",
      Function: () => this.router.navigate(['pesquisa-itil'])
    },
    {
      Title: "Demais itens",
      Function: () => this.router.navigate(['gestao-e-governanca-de-ti'])
    }
  ];

  ngOnInit(): void {
    this.AppService.addCurrentPath(this.router.url);
  };


  async RefreshPage(): Promise<void>{
    this.loading = true;
    this.loading = false;
    alert("Atualizado");
  };
}
