import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { ComponenteBootstrapComponent } from './componente-bootstrap/componente-bootstrap.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Prueba1Component, Prueba2Component, ComponenteBootstrapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'databinding';
}
