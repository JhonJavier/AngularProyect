import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ModalidadComponent } from './modalidad/modalidad.component';
import { FormModalidadComponent } from './modalidad/form-modalidad.component';

//Configuracion de las rutas
const routes: Routes=[
  {
    path:'', redirectTo:'/modalidad', pathMatch:'full'
  },
  {
    path:'modalidad', component:ModalidadComponent
  },
  {
    path:'modalidad/form', component:FormModalidadComponent
  },
  {
    path:'modalidad/form/:id', component:FormModalidadComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ModalidadComponent,
    FormModalidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),//Aqui la aplicacion toma las rutas
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
