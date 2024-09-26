<template>
<div id="completedTask" class="full-screen">
	<h1>Completed Todos</h1>
  <todo-list :todos="completedTodos" :key="compKey"></todo-list>
</div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
export default {
  name: "CompletedTask",
  components: {

    TodoList,
  },
  computed: {
    completedTodos() {
			console.log("Computed calling");
      return this.todos.filter((e) => e.isComplete);
    }
  },
  data() {
    return {
      todos: [],
			compKey: 0
    };
  },
  mounted() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) this.todos = JSON.parse(savedTodos);
  },
  watch: {
    todos: {
      handler(newV) {
        localStorage.setItem("todos", JSON.stringify(newV));
      },
      deep: true,
    },
  },
  methods: {
    addTodo(val) {
      if (val.trim() !== "") {
        const obj = {
          text: val,
          isEdit: false,
          isComplete: false,
        };
        this.todos.push(obj);
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(i) {
      this.todos.forEach((e, index) => {
        if (i === index) e.isEdit = true;
      });
    },
    saveTodo(i, todo) {
      this.todos.forEach((e, index) => {
        if (i === index) {
          e.text = todo.text;
          e.isEdit = false;
        }
      });
      this.newTodo = "";
    },
    markAsComplete(i, todo) {
      this.todos.forEach((e, index) => {
        if (i === index) {
          e.isComplete = todo.isComplete;
        }
      });
    },
  },
};
</script>

<style scoped>
/* Ensure the component takes up full screen */
.full-screen {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 3rem;
  color: #42b983;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  font-size: 1.2rem;
  border: 2px solid #42b983;
  border-radius: 5px;
  margin-right: 10px;
  width: 80%;
}

button {
  padding: 12px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #36956b;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

li {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #f9f9f9;
}

span {
  font-size: 1.2rem;
  text-decoration: none;
  flex-grow: 1;
}

span.completed {
  text-decoration: line-through;
  color: #999;
}

input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.2);
}

.todo-actions {
  display: flex;
  gap: 10px;
}

button.edit,
button.delete {
  font-size: 1rem;
}

button.delete {
  background-color: #ff6b6b;
}

button.delete:hover {
  background-color: #ff4d4d;
}
</style>
