<script setup lang="ts">
import { format } from 'date-fns'
import { ref } from 'vue'
import { CalendarIcon } from '@radix-icons/vue'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { watch, defineProps } from 'vue'

const props = defineProps({
  modelValue: Date
})

const emit = defineEmits(['update:modelValue'])

const selectedDate = ref(props.modelValue)

watch(selectedDate, (newValue) => {
  emit('update:modelValue', newValue)
})

</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        :variant="'outline'"
        :class="cn(
          'w-[280px] justify-start text-left font-normal',
          !selectedDate && 'text-muted-foreground',
        )"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        <span>{{ selectedDate ? format(selectedDate, 'PPP - hh:mm') : "Pick a date" }}</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="selectedDate" mode="datetime" />
    </PopoverContent>
  </Popover>
</template>