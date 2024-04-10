import { defineStore } from 'pinia'
import { Task } from '../task-table.vue'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    addTask(newTask: Task) {
      this.tasks.push(newTask);
    },
  },
})