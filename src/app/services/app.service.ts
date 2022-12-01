// import { environment } from '../../environments/environments';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AppService implements OnInit{

    private pathsNavigated: string[] = [];

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.pathsNavigated.push(this.getLastPath());
    }

    GetLoadingImage(): string{
        return "https://gifmania.com.br/wp-content/uploads/2020/01/carregando.gif";
    }

    SetSideNavBar(open: boolean){
        localStorage.setItem("app_sidenavbar_isopen", open ? 'true' : 'false');
    }

    GetSideNavBar(): boolean{
        return localStorage.getItem("app_sidenavbar_isopen") === 'true';
    }

    NavBarToggle(): boolean{
        var isToggled: boolean = this.GetSideNavBar();
        this.SetSideNavBar(!isToggled);
        return this.GetSideNavBar();
    }

    notImplemented(): void{
        alert("não implementado ainda");
    };

    //#region system features

    addCurrentPath(path: string): void{
        this.pathsNavigated.push(path);
        var lastPath = this.pathsNavigated[this.pathsNavigated.length - 1]
        this.setLastPath(lastPath);
    }

    getLastPath(): string {
        return localStorage.getItem("app_system_lastPath") ?? "";
    }

    setLastPath(path: string | null | undefined): void {
        localStorage.setItem("app_system_lastPath", path ?? "");
    }

    systemCacheReset(){
        this.setLastPath("");
    }

    //#endregion system features
}
