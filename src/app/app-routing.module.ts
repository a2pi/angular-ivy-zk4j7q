import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Onb1Component } from './onb1/onb1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GeburtsdatumComponent } from './geburtsdatum/geburtsdatum.component';
import { Onb2Component } from './onb2/onb2.component';
import { Onb3Component } from './onb3/onb3.component';
import { Onb4Component } from './onb4/onb4.component';
import { Onb5Component } from './onb5/onb5.component';
import { Onb6Component } from './onb6/onb6.component';
import { Onb7Component } from './onb7/onb7.component';
import { Onb8Component } from './onb8/onb8.component';
import { Onb9Component } from './onb9/onb9.component';
import { Onb10Component } from './onb10/onb10.component';




const routes: Routes = [] = [
 {path: '' , redirectTo: '/home', pathMatch:'full'},
 {path: 'home' ,component: HomeComponent},
 {path: 'geburtsdatum' , component: GeburtsdatumComponent},
 {path: 'onb1' , component: Onb1Component},
 {path: 'onb2' , component: Onb2Component},
 {path: 'onb3' , component: Onb3Component},
 {path: 'onb4' , component: Onb4Component},
 {path: 'onb5' , component: Onb5Component},
 {path: 'onb6' , component: Onb6Component},
 {path: 'onb7' , component: Onb7Component},
 {path: 'onb8' , component: Onb8Component},
 {path: 'onb9' , component: Onb9Component},
 {path: 'onb10' , component: Onb10Component},
 //{path: 'onb6' , component: Onb6Component},


 {path: '**' , component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
