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
  

  enviar(){
    this.propagar.emit(this.anotar_equipo_uno + this.anotar_equipo_dos);
  }
      anotar_equipo_uno=0;
      anotar_equipo_dos=0;
       Anotar(){
         this.anotar_equipo_uno++;
       }

       Anotar2(){
         this.anotar_equipo_dos++;
        
       }
       per_ganar(){
        if (this.anotar_equipo_uno > this.anotar_equipo_dos){
          console.log("Equipo uno vas ganando", this.anotar_equipo_uno);
        }
        else{
          console.log("Equipo uno vas perdiendo", this.anotar_equipo_uno);
        }
        if (this.anotar_equipo_dos > this.anotar_equipo_uno){
          console.log("Equipo dos vas ganando", this.anotar_equipo_dos);
        }
        else{
          console.log("Equipo dos vas perdiendo", this.anotar_equipo_dos);
        }
       }
}
