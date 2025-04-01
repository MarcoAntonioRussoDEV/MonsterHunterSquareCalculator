import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() subLabel: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: string = '';
  inputValue: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange() {
    this.valueChange.emit(this.inputValue);
  }
}
