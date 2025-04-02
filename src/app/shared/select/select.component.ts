import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  standalone: true,
})
export class SelectComponent {
  @Input() label: string = '';
  @Input() subLabel: string = '';
  @Input() options: any[] = [];
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: string = '';
  inputValue: number = 0;
  selectedOption: any = null;

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  onValueChange() {
    this.valueChange.emit(this.inputValue);
    this.selectedOption = this.options.find(
      (option) => option.id === this.inputValue
    );
  }
}
