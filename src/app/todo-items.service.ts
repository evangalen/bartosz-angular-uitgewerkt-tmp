import { Injectable } from "@angular/core";

@Injectable()
export class TodoItemsService {
  private items = [
    { id: 1, text: "Item 1 (from JS)", done: false },
    { id: 2, text: "Item 2 (from JS)", done: true },
    { id: 3, text: "Item 3 (from JS)", done: false },
    { id: 4, text: "Item 4 (from JS)", done: true }
  ];

  private lastId = 4;

  getFilteredItems(done) {
    return this.items.filter(item => item.done === done);
  }

  addItem(text) {
    // generate a new  lastId  value
    this.lastId = this.lastId + 1;
    console.log({ id: this.lastId, text, done: false });
    // adds a new item to the  todoItems  array
    this.items.push({ id: this.lastId, text, done: false });
    console.log(this.items);
  }

  toggleDone(id) {
    // find todo item for id
    const item = this.items.find(item => item.id === id);
    item.done = !item.done;
  }

  removeItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1); // remove one item at found index
  }
}
