
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
  

  @Input() equipo1: string ='';
  @Input() equipo2: string='';
  anotar_equipo_uno=0;
  anotar_equipo_dos=0;
  tiempo: number = 60;
  intervalo: any;
  estado='';
  botonIniciarActivo: boolean = false;

  visible_uno=true;
  visible_dos=true;
  

  click_uno(){
    this.anotar_equipo_uno++;
    this.enviarValores.emit({ equipoUno: this.anotar_equipo_uno, equipoDos: this.anotar_equipo_dos });
    

  }

  click_dos(){
    this.anotar_equipo_dos++;
    this.enviarValores.emit({ equipoUno: this.anotar_equipo_uno, equipoDos: this.anotar_equipo_dos });
    
  }

  obtenerEstadoEquipo1(): string {
    if (this.anotar_equipo_uno > this.anotar_equipo_dos) {
      return 'Vas ganando';
    } else if (this.anotar_equipo_uno < this.anotar_equipo_dos) {
      return 'Vas perdiendo';
    } else {
      return 'Empatados';
    }
  }

  obtenerEstadoEquipo2(): string {
    if (this.anotar_equipo_dos > this.anotar_equipo_uno) {
      return 'Vas ganando';
    } else if (this.anotar_equipo_dos < this.anotar_equipo_uno) {
      return 'Vas perdiendo';
    } else {
      return 'Empatados';
    }
  }

  autorizar() {
    this.visible_uno=false;
    this.visible_dos=false;
    this.iniciarTemporizador();
  }
  iniciarTemporizador() {
    this.intervalo = setInterval(() => {
      if (this.tiempo > 0) {
        this.tiempo--;
      } else {
        clearInterval(this.intervalo);
        this.visible_uno=true;
        this.visible_dos=true;
      }
    }, 1000); 
  }
      
}
