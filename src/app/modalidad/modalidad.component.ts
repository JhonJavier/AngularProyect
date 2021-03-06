import { Component, OnInit } from '@angular/core';
import { Modalidad } from './modalidad';
import { ModalidadService } from './modalidad.service';

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css']
})
export class ModalidadComponent implements OnInit {

  titulo: string = "Lista de Modalidades"
  modalidad:Modalidad[] | undefined;

  constructor(private modalidadService: ModalidadService) { }

  ngOnInit(): void {
    //subcribimos para obtener los datos
    this.modalidadService.getAll().subscribe(
      e => this.modalidad=e
    );
  }

  delete(modalidad:Modalidad): void{
    console.log("Eliminando registro");
    this.modalidadService.delete(modalidad.id_modalidad).subscribe(
      res => this.modalidadService.getAll().subscribe(
        response =>this.modalidad=response
      )
    );
  }

}
