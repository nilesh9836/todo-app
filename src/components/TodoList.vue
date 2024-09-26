<template>
<div class="todo-list">
  <input type="text" v-model="searchTxt" placeholder="Search..." />
  <ul>
    <todo-item v-for="(todo,i) in searchTodoByLetter(searchTxt)" :key="i" @edit-todo="editTodo" @delete-todo="deleteTodo" @mark-complete="markAsComplete" @save-todo="saveTodo" :todo="todo" :i="i"></todo-item>
  </ul>
</div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  data() {
    return {
      searchTxt: ""
    }
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TodoItem,
  },
  methods: {
    searchTodoByLetter(letter) {
      console.log(letter);
      return this.todos.filter((e) => e.text.startsWith(letter));
    },
    markAsComplete(index, todo) {
      this.$emit("mark-complete", {
        index,
        todo
      });
    },
    saveTodo(index, todo) {
      this.$emit("save-todo", {
        index,
        todo
      });
    },
    editTodo(index) {
      this.$emit("edit-todo", index);
    },
    deleteTodo(index) {
      this.$emit("delete-todo", index);
    }
  },
};
</script>

<style scoped>
.todo-list {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}

li:last-child {
  margin-bottom: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.todo-item .todo-content {
  flex-grow: 1;
}

.todo-item .todo-actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 5px 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  opacity: 0.8;
}

.edit-btn {
  background-color: #3498db;
  color: white;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
}
</style>