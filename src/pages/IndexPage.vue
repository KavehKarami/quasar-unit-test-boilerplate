<template>
  <q-page class="flex flex-center column jusify-center">
    <p>
      counter : <span data-testid="counter">{{ store.counter }}</span>
    </p>
    <q-btn
      color="primary"
      data-testid="button"
      type="button"
      @click="store.increment"
    >
      Increment!
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
</script>
