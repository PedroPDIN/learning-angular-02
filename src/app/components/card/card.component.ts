import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true })
  planType: string = '';

  @Input({ required: true })
  planPrice: number = 0;

  @Input()
  cardStyle: 'orange' | 'purple' = 'orange';

  @Output('cardOutput')
  eventOutputCard = new EventEmitter<void>();

  btnOutputCard() {
    console.log('irei avisar para o elemento pai que no caso é o app-component.')
    this.eventOutputCard.emit();
  }
}
