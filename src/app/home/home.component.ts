import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../shared/input/input.component';

@Component({
  selector: 'app-home',
  imports: [InputComponent, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  result: number = 0;
  arma: string = ''; // Valore per l'input "arma"
  danno: number = 0; // Valore per l'input "danno"
  acutezza: string = ''; // Valore per l'input "acutezza"
  affinity: number = 0; // Valore per l'input "affinità"

  calculate(): void {
    // Esempio di calcolo basato sugli input
    this.result = this.danno;
  }
}
