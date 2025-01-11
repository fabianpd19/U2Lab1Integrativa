import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prueba1',
  imports: [FormsModule],
  templateUrl: './prueba1.component.html',
  styleUrl: './prueba1.component.css'
})
export class Prueba1Component {
  edad = 21;
  imageUrl = '../favicon.ico'

  onClick(){
    console.log("Dio Click");
  };

  frutas = 'fruta';


}
