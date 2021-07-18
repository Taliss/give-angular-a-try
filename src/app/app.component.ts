import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>`,
  styles: ['h1 { color: purple }'],
})
export class AppComponent {
  title = 'give-angular-a-try';
}
