<template>
  <div class="todo-item">
    <div v-if="!isEdit" class="todo-content">
      <input type="checkbox" v-model="isComplete" @change="markAsComplete(i,todo)" />
      <span :class="{ completed: isComplete }">{{ text }}</span>
    </div>
    <div v-else class="todo-edit">
      <input type="text" v-model="text" />
      <button @click="saveTodo(i,todo)" class="save-btn">Save</button>
    </div>
    <div class="todo-actions">
      <button @click="editTodo(i)" class="edit-btn">Edit</button>
      <button @click="deleteTodo(i)" class="delete-btn">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      text: this.todo.text,
      isComplete: this.todo.isComplete,
      isEdit: this.todo.isEdit
    };
  },
  props: {
    todo: {
      type: Object,
      default: () => ({})
    },
    i: {
      type: Number,
      default: 0
    }
  },
  methods: {
    markAsComplete() {
      this.$emit('mark-complete', this.i, {
        text: this.text,
        isComplete: this.isComplete
      });
    },
    saveTodo() {
      this.$emit('save-todo', this.i, {
        text: this.text,
        isComplete: this.isComplete,
        isEdit: false
      });
    },
    editTodo() {
      this.$emit('edit-todo', this.i);
    },
    deleteTodo() {
      this.$emit('delete-todo', this.i);
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.todo-content {
  display: flex;
  align-items: center;
}

.todo-edit {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 10px;
}

span {
  font-size: 18px;
}

.completed {
  text-decoration: line-through;
  color: #aaa;
}

.todo-actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 5px 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.save-btn {
  background-color: #42b983;
  color: white;
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
