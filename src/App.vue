<script setup lang="ts">
  import Header from './components/Header.vue'
  import TaskTable from './dashboard/task-table.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <Header />
    <TaskTable />
  </div>
</template>

