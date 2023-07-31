<template>
  <div>
    <div v-if="data === undefined && !error">loading...</div>
    <h2 v-if="data">{{ data.title }}</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useSWRV from "swrv";

const route = useRoute();

const todoId = route.params.id;

const endpoint = ref(`/todos/${route.params.id}`);
const fetcher = () => {
  return fetch(`https://jsonplaceholder.typicode.com${endpoint.value}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
};

const { data, error } = useSWRV(endpoint.value, fetcher);
</script>
