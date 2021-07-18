import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-form',
  template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
  `,
  styles: [],
})
export class HabitFormComponent implements OnInit {
  habitForm: any;
  @Output() addHabit = new EventEmitter<Omit<Habit, 'id'>>();

  constructor(private fromBuilder: FormBuilder) {
    this.habitForm = this.fromBuilder.group({
      title: '',
    });
  }

  onSubmit(newHabit: Omit<Habit, 'id'>) {
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
  }

  ngOnInit(): void {}
}
