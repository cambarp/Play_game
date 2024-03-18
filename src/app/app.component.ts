import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarcadorEquiposComponent } from './marcador-equipos/marcador-equipos.component';
import { ResultadosPartidoComponent } from './resultados-partido/resultados-partido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarcadorEquiposComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'play_Game';
}
