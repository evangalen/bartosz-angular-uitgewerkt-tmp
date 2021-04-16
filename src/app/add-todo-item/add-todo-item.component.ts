import { Component, OnInit } from "@angular/core";
import { TodoItemsService } from "../todo-items.service";

@Component({
  selector: "app-add-todo-item",
  templateUrl: "./add-todo-item.component.html",
  styleUrls: ["./add-todo-item.component.css"]
})
export class AddTodoItemComponent implements OnInit {
  constructor(private todoItemsService: TodoItemsService) {}

  ngOnInit() {}

  text = "";

  addTodo() {
    this.todoItemsService.addItem(this.text);
  }
}
