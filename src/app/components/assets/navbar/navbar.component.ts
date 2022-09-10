import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOption } from '../../../interfaces/small-interfaces/small-interfaces';
import { AppService } from '../../../services/app.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user.interface'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private AppService: AppService,
    private router: Router
  ) { }

  @Input() ActualArea: string = 'ESQUECEU DE PASSAR O INPUT DE AREA SEU CORNO';
  @Input() AreaAction: Function = () => {};
  @Input() HaveAreaAction: boolean = false;
  @Input() AreaActionTitle: string = '';
  
  user: User = this.userService.GetActualUser();
  altText: string = "imagem de perfil";
  showFiller: Boolean =  false;
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
      Title: "Demais itens",
      Function: () => this.router.navigate(['gestao-e-governanca-de-ti'])
    }
  ];

  profileOptions: MenuOption[] = [
    {
      Title: "Meu Perfil",
      Function: () => this.router.navigate(['/user/profile'])
    },
    {
      Title: "Sair",
      Function: () => this.logOut()
    }
  ];
    
  ngOnInit(): void {
    this.AppService.VerifyLogin();
    this.AppService.addCurrentPath(this.router.url);
  };

  logOut(): void{
    this.AppService.logOut();
  };

  async RefreshPage(): Promise<void>{
    this.loading = true;
    await this.AppService.RefreshPage(this.router.url);
    this.loading = false;
    alert("Atualizado");
  };
}
