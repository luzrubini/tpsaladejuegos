import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {LoginComponent} from './componentes/login/login.component';
import {QuiensoyComponent} from './componentes/quiensoy/quiensoy.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {ErrorComponent} from './componentes/error/error.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'quiensoy',component:QuiensoyComponent},
  {path:'registro',component:RegistroComponent},
  {path:'**',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
