import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GeburtsdatumComponent } from './geburtsdatum/geburtsdatum.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Onb1Component } from './onb1/onb1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Onb2Component } from './onb2/onb2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { Onb3Component } from './onb3/onb3.component';
import {MatRadioModule} from '@angular/material/radio';
import { Onb4Component } from './onb4/onb4.component';
import { Onb5Component } from './onb5/onb5.component';
import { Onb6Component } from './onb6/onb6.component';
import { Onb7Component } from './onb7/onb7.component';
import { Onb8Component } from './onb8/onb8.component';
import { Onb9Component } from './onb9/onb9.component';
import { Onb10Component } from './onb10/onb10.component';
import { Onb11Component } from './onb11/onb11.component';
import { DashboardComponent } from './dashboard/dashboard.component';






@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    Onb1Component,
    GeburtsdatumComponent,
    PageNotFoundComponent,
    Onb2Component,
    Onb3Component,
    Onb4Component,
    Onb5Component,
    Onb6Component,
    Onb7Component,
    Onb8Component,
    Onb9Component,
    Onb10Component,
    Onb11Component,
    DashboardComponent,
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
