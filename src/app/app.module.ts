//angular base modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//environments
import { environment } from '../environments/environment';

//components
import { NavbarComponent } from './components/assets/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PulsingButtonComponent } from './components/assets/buttons/pulsing-button/pulsing-button.component';
import { DialogComponent } from './components/assets/dialog/dialog.component';
import { MultiSelectInputComponent } from './components/assets/inputs/multi-select-input/multi-select-input.component';
import { MaterialModule } from './modules/material-module';
import { LoadingScreenComponent } from './components/assets/loading-screen/loading-screen.component';
import { EntrevistaComponent } from './components/entrevista/entrevista.component';
import { ResenhaComponent } from './components/resenha/resenha.component';
import { OutrosComponent } from './components/outros/outros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PulsingButtonComponent,
    DialogComponent,
    MultiSelectInputComponent,
    LoadingScreenComponent,
    EntrevistaComponent,
    ResenhaComponent,
    OutrosComponent,
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
