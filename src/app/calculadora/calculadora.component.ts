import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {


  numero1: number = 0;
  numero2: number = 0;


  sumar(): number {
    return this.numero1 + this.numero2;
  }
}
