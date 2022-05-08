import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modalidad } from './modalidad';
import { ModalidadService } from './modalidad.service';

@Component({
  selector: 'app-form-modalidad',
  templateUrl: './form-modalidad.component.html',
  styleUrls: ['./form-modalidad.component.css']
})
export class FormModalidadComponent implements OnInit {

  //Instanciamos la clase modalidad
  modalidad:Modalidad = new Modalidad();
  titulo:string="Registro de Modalidad";

  constructor(private modalidadService: ModalidadService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  //metodo para agregar datos
  create():void{
    console.log(this.modalidad)
    this.modalidadService.create(this.modalidad).subscribe(
      res=>this.router.navigate(['/modalidad'])
    );
  }

  //metodo para cargar datos
  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.modalidadService.get(id).subscribe(
            es=>this.modalidad=es
          );
        }
      }
    );
  }

  //metodo para actudalizar datos
  update():void{
    this.modalidadService.update(this.modalidad).subscribe(
      e=>this.router.navigate(['/modalidad'])
    );
  }

}
