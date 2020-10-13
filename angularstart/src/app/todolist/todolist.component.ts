import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  titleList = 'To-Do List';
  category = 'All';
  todoList = [
    { item: 'Learn Mongo', status: false },
    { item: 'Learn Angular', status: true },
    { item: 'Learn Express', status: false },
    { item: 'Learn Node', status: false }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addTopic(topicName) {
    this.todoList.push({ item: topicName, status: false });
  }

  getTopics() {
    if (this.category === 'All') {
      return this.todoList;
    } else if (this.category === 'Completed') {
      return this.todoList.filter((item) => {
        if (item.status) {
          return item;
        }
      });
    } else {
      return this.todoList.filter((item) => {
        if (!item.status) {
          return item;
        }
      });
    }
  }

  toggleTasks(categoryStatus: string) {
    this.category = categoryStatus;
    
  }

}
