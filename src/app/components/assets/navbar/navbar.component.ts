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
  menuOptions: MenuOption[] = this.AppService.GetSideNavBarOptions();

  ngOnInit(): void {
    this.AppService.addCurrentPath(this.router.url);
  };

  async RefreshPage(): Promise<void>{
    this.loading = true;
    this.loading = false;
    alert("Atualizado");
  };
}
