import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits = [
    {
      id: 1,
      title: 'FOO',
    },
    {
      id: 2,
      title: 'BAR',
    },
    {
      id: 3,
      title: 'BAZ',
    },
    {
      id: 4,
      title: 'JAZ',
    },
  ];

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit(newHabit: { title: string }) {
    this.habits.push({
      ...newHabit,
      id: this.habits.length + 1,
    });
  }
}
