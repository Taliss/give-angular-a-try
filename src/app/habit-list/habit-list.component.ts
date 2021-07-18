import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  habits = [
    {
      id: 1,
      title: 'FOO',
    },
    {
      id: 2,
      title: 'BAR',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
