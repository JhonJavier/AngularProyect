import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidad } from './modalidad';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  private url:string="http://localhost:9070/modalidad";

  constructor(private http:HttpClient) { }

  //Obtener tadas las modalidades
  getAll():Observable<Modalidad[]>{
    return this.http.get<Modalidad[]>(this.url);
  }

  //crear nueva modalidad
  create(modalidad:Modalidad):Observable<Modalidad>{
    return this.http.post<Modalidad>(this.url, modalidad);
  }

  //Obtener modalidad por un id de modalidad
  get(id_modalidad:number):Observable<Modalidad>{
    return this.http.get<Modalidad>(this.url+'/'+id_modalidad);
  }

  //actualizar modalidad
  update(modalidad:Modalidad):Observable<Modalidad>{
    return this.http.put<Modalidad>(this.url, modalidad);
  }

  //eliminar modalidad
  delete(id_modalidad:number):Observable<Modalidad>{
    return this.http.delete<Modalidad>(this.url+'/'+id_modalidad);
  }

}
