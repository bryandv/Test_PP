import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router'
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from "primeng/dialog";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TeamsComponent } from './teams/teams.component';
import { SwapiComponent } from './swapi/swapi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './service/auth.guard';

import {environment} from "../environments/environment";


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { GetSpelerComponent } from './teams/get-speler/get-speler.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    SwapiComponent,
    NavbarComponent,
    HomeComponent,
    GetSpelerComponent,
    
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    TabMenuModule,
    FormsModule,
    CardModule,
    InputTextModule,
    PanelModule,
    ToolbarModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "home", pathMatch: "full",canActivate: [AuthGuard]},
      {path: "home",component:HomeComponent},
      {path: "star",component:SwapiComponent,canActivate: [AuthGuard]},
      {path: "pp",component:TeamsComponent,canActivate: [AuthGuard]}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
