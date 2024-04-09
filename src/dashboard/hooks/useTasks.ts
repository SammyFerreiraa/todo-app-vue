import { defineStore } from 'pinia'
import { Task } from '../task-table.vue'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 'task1',
        status: 'pending',
        name: 'Complete project report',
        date: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      },
      {
        id: 'task2',
        status: 'processing',
        name: 'Review client feedback',
        date: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      },
      {
        id: 'task3',
        status: 'complete',
        name: 'Prepare presentation slides',
        date: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      },
      {
        id: 'task4',
        status: 'pending',
        name: 'Schedule team meeting',
        date: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      },
      {
        id: 'task5',
        status: 'processing',
        name: 'Research new technologies',
        date: `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      },
      ] as Task[],
  }),
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
  },
})