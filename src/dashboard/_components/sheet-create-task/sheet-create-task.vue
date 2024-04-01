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

const name = ref('')
const description = ref('')

const submitForm = (event: any) => {
  event.preventDefault()
  console.log('Name:', name.value)
  console.log('Description:', description.value)
  // console.log('Date:', date.value)
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
      <form class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input id="name" v-model="name" class="col-span-3" autocomplete="off"/>
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="description" class="text-right">
            Description
          </Label>
          <Input id="description" v-model="description" class="col-span-3" autocomplete="off"/>
        </div>
        <DateTimePicker  />
        <SheetFooter>
          <SheetClose as-child>
            <Button v-on:click="submitForm">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </SheetContent>
  </Sheet>
</template>