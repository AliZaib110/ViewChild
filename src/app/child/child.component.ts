import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  counter: number = 0;
  message: string = '';
  increaseByOne() {
    this.counter = this.counter + 1;
    this.message = 'counter :' + this.counter;
  }

  decreaseByOne() {
    this.counter = this.counter - 1;
    this.message = 'counter :' + this.counter;
  }
}
