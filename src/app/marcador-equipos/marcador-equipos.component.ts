import { Component } from '@angular/core';
import { ResultadosPartidoComponent } from '../resultados-partido/resultados-partido.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marcador-equipos',
  standalone: true,
  imports: [ResultadosPartidoComponent , FormsModule],
  templateUrl: './marcador-equipos.component.html',
  styleUrl: './marcador-equipos.component.css'
})
export class MarcadorEquiposComponent {
 primer_dato=0
 


    recivirdato(dato : any){
      this.primer_dato=dato;
      
    }
}
