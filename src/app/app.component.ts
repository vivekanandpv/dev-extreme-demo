import { Component } from '@angular/core';
import { Person, persons } from './data.1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: Person[] = persons;

  inputValue = '';
}
