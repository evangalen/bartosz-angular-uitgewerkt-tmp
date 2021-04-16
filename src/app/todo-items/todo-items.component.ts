import { Component, Input, OnInit } from "@angular/core";
import { TodoItemsService } from "../todo-items.service";

@Component({
  selector: "app-todo-items",
  templateUrl: "./todo-items.component.html",
  styleUrls: ["./todo-items.component.css"]
})
export class TodoItemsComponent implements OnInit {
  constructor(private todoItemsService: TodoItemsService) {}

  ngOnInit() {}

  @Input()
  done = false;

  get items() {
    return this.todoItemsService.getFilteredItems(this.done);
  }

  removeItem(id) {
    this.todoItemsService.removeItem(id);
  }
 
  toggleDone(id) {
    this.todoItemsService.toggleDone(id);
  }
}
