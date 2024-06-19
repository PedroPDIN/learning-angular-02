import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input({ required: true })
  btnText: string = '';

  @Input()
  classBgColor: 'white' | 'purple' = 'white';

  @Input()
  isDisabled: boolean = false;

  @Output('clicked')
  eventClick = new EventEmitter<void>();

  alertClick(): void {
    console.log('irei avisar para o elemento pai, que eu fui clicado.')
    this.eventClick.emit();
  };
}
