import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-bootstrap',
  imports: [FormsModule],
  templateUrl: './componente-bootstrap.component.html',
  styleUrl: './componente-bootstrap.component.css'
})
export class ComponenteBootstrapComponent {
  nombre = 'Fabián Palma';
  profileImage = 'https://picsum.photos/200';
  colorSeleccionado = 'Rojo';

  cambiarNombre() {
    this.nombre = 'Alexander Dueñas';
    console.log('Nombre cambiado a:', this.nombre);
  }


}
