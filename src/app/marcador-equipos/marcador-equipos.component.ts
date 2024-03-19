import { Component } from '@angular/core';
import { ResultadosPartidoComponent } from '../resultados-partido/resultados-partido.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marcador-equipos',
  standalone: true,
  imports: [  ResultadosPartidoComponent, FormsModule],
  templateUrl: './marcador-equipos.component.html',
  styleUrl: './marcador-equipos.component.css'
})
export class MarcadorEquiposComponent {
  equipo1: string = "";
  equipo2: string = "";
  
  tiempo=60;
 primer_dato=0
 valorEquipoUno=0
 valorEquipoDos=0
 
 recibirValoresDelHijo(valores: { equipoUno: number, equipoDos: number }) {
  this.valorEquipoUno = valores.equipoUno;
  this.valorEquipoDos = valores.equipoDos;
  
}

p_visual(){
  
}
}
