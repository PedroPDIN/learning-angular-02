import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './components/person/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormsModule, CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  name: string = 'Pedro';
  minhaProp: boolean = true;
  minhaProp2: boolean = true;
  listPersons = [
    { name: 'Felipe Freitas', idade: 26},
    { name: 'Fulano da Silva', idade: 34},
    { name: 'Jorginho Carvalho', idade: 55},
    { name: 'Joãozinho da Silva', idade: 18},
  ];
  personSelectIndex: number | undefined;

  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white';
  btnText: 'Branco' | 'Laranja' = 'Laranja';
  isGreen: boolean = true;

  textPipe = 'boa noite';
  pessoaPipe = { name: 'Pedro' };

  methodClick() {
    console.log('O botão voi clicado, mas antes foi avisado através do elemento filho. (card component)')
  };

  // handleName(event: string): void {
  //   this.name = event;
  // };

  toggleProp() {
    this.minhaProp = !this.minhaProp;
  }

  toggleProp2() {
    this.minhaProp2 = !this.minhaProp2;
  }

  toggleClass(event: number) {
    this.personSelectIndex = event;
  }

  increaseFontSize() {
    this.fontSize += 5;
  }

  updateBtnText() {
    this.btnText = this.btnText === 'Laranja' ? 'Branco' : 'Laranja';
    this.textColor = this.btnText === 'Laranja' ? 'white' : 'orange';
  }

  setToGreen() {
    this.isGreen = true;
  }

  setToOrange() {
    this.isGreen = false;
  }
}
