import { ArrayType } from '@angular/compiler';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resultados-partido',
  standalone: true,
  imports: [],
  templateUrl: './resultados-partido.component.html',
  styleUrl: './resultados-partido.component.css'
})
export class ResultadosPartidoComponent {
  @Output()
  propagar = new EventEmitter<number>();

anotar_equipo_uno=0;
anotar_equipo_dos=0;
mensaje=""
array=[]
  click_uno(){
    this.anotar_equipo_uno++;
  }
  click_dos(){
    this.anotar_equipo_dos++;
  }
      
  per_ganar(){
    this.propagar.emit()
    console.log(this.array);

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
