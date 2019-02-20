import { TodoActionBar } from './TodoActionBar.js';
import { TodoItem } from './TodoItem.js';

function TodoManager() {

    this.todoList =  [];

}

TodoManager.prototype.init = function () {
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.initialize(this);
    this.todoItem = new TodoItem();
    this.todoItem.init(this);
}

TodoManager.prototype.addTodoItem = function (todoText) {
    var todoElement = this.todoItem.addItem(todoText);
    this.todoList.push(new TodoItem(todoElement.todoID, todoText));
    document.getElementById('list-container').appendChild(todoElement.todoItem);
};

TodoManager.prototype.deleteSelectedItem = function () {
    for (var i = this.todoList.length - 1; i >= 0; i--) {
        if (this.todoList[i].checked === true) {
            var id = this.todoList[i].id;
            document.querySelector(`[todo-id='${id}']`).remove();
            this.todoList.splice(i, 1);
        }
    }
};

TodoManager.prototype.selectTodoItem = function () {
    for (var i = 0; i < this.todoList.length; i++) {
        var id = this.todoList[i].id;
        document.querySelector(`[todo-id='${id}']`).querySelector(`[todo-action="selectTodoItem"]`).checked = true;
        this.todoList[i].checked = true;
    }
}
export { TodoManager };
