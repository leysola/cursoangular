import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre= "Juan";

  apellido ="Hernandez"; 

  private edad= 47;

  empresa="Sancor";

  getEdad(){
    return this.edad;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
