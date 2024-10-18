import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './task';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})


export class TaskListComponent {
  lastId: number = 0;
  inputValue: string = '';

  tasks: Task[] = [];

  getTasks(completed: boolean) {
    return this.tasks.filter(task => task.completed === completed);
  }

  getPendingTasks() {
    return this.getTasks(false)
  }

  getCompletedTasks() {
    return this.getTasks(true)
  }

  getTaskById(taskId: number) {
    return this.tasks.find(task => task.id === taskId);
  }

  addTask() {
    this.tasks.push({
      id: this.lastId++,
      name: this.inputValue,
      completed: false
    });

    this.inputValue = '';
  }

  markTask(taskId: number, completed: boolean) {
    let task = this.getTaskById(taskId)

    if (task) {
      task.completed = completed;
    }
  }

  removeTasks() {
    this.tasks = [];
  }
}
