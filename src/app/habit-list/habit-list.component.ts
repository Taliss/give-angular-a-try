import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
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

  onAddHabit(newHabit) {
    this.habits.push({
      ...newHabit,
      id: this.habits.length + 1,
    });
  }

  ngOnInit(): void {}
}
