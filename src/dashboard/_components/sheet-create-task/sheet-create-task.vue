<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import DateTimePicker from './date-time-picker.vue'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ref } from 'vue'
import { useTasksStore } from '@/dashboard/hooks/useTasks'
import { format } from 'date-fns'
import { uuid } from 'vue-uuid'

const name = ref('')
const date = ref(new Date())

const store = useTasksStore()

const submitForm = (e: any) => {
  e.preventDefault()
  store.addTask({ 
    id: uuid.v1(),
    name: name.value,
    status: "pending",
    date: format(date.value, 'dd/ee hh:mm aa')})
}

</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="link">
        Create Task
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit task</SheetTitle>
        <SheetDescription>
          Edit your task!
        </SheetDescription>
      </SheetHeader>
      <form class="grid gap-4 py-4" v-on:submit.prevent="submitForm">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input id="name" v-model="name" class="col-span-3" autocomplete="off"/>
        </div>
        <DateTimePicker v-model="date" />
        <SheetFooter>
          <SheetClose as-child>
            <Button :onclick="submitForm">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </SheetContent>
  </Sheet>
</template>