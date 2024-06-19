import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input({ required: true }) personIndex: number = 0;
  @Input({ required: true }) personName: string = "";
  @Input({ required: true }) personAge: number = 0;
  @Input({ required: true }) isOdd: boolean = false;
  @Input({ required: true }) isFirst: boolean = false;
  @Input({ required: true }) isLast: boolean = false;
  @Input({ required: true }) isSelected: boolean = false;

  @Output() selectPersonEmitter = new EventEmitter<number>();

  toggleIndex() {
    this.selectPersonEmitter.emit(this.personIndex);
  };
}
