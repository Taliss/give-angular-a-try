import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  constructor(private fromBuilder: FormBuilder) {
    this.habitForm = this.fromBuilder.group({
      title: '',
    });
  }

  onSubmit(newHabit) {
    this.habits.push({
      ...newHabit,
      id: this.habits.length + 1,
    });
    this.habitForm.reset();
  }

  ngOnInit(): void {}
}
