
import { Component, Output, EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-resultados-partido' ,
  standalone: true,
  imports:[],
  templateUrl: './resultados-partido.component.html',
  styleUrls: ['./resultados-partido.component.css'],
})
export class ResultadosPartidoComponent {
  @Output() enviarValores = new EventEmitter<{ equipoUno: number, equipoDos: number }>();
  @Input() equipo1: string ="";
  @Input() equipo2: string="";
anotar_equipo_uno=0;
anotar_equipo_dos=0;
mensaje=""

  click_uno(){
    this.anotar_equipo_uno++;
    this.enviarValores.emit({ equipoUno: this.anotar_equipo_uno, equipoDos: this.anotar_equipo_dos });
  
  }
  click_dos(){
    this.anotar_equipo_dos++;
    this.enviarValores.emit({ equipoUno: this.anotar_equipo_uno, equipoDos: this.anotar_equipo_dos });
  }
      
  per_ganar(){
    

      if (this.anotar_equipo_uno > this.anotar_equipo_dos){
        this.mensaje="vas ganando";
      }
      else{
        this.mensaje="vas perdiendo";
      }
      if (this.anotar_equipo_dos > this.anotar_equipo_uno){
        console.log("Equipo dos vas ganando", this.anotar_equipo_dos);
      }
      else{
        console.log("Equipo dos vas perdiendo", this.anotar_equipo_dos);
      }
      }
      
}
