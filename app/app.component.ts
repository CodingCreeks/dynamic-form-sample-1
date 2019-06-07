import { Component } from '@angular/core';

import { person } from './person';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular dynamic reactive forms</h1>

    <dynamic-form [config]="person" [data]="data"></dynamic-form>
  `
})
export class AppComponent {
  person;
  data = {
    name: "John Doe",
    age: 12,
    gender: "F",
    city: "39010",
  }

  constructor() {
    this.person = person;
  }
}
