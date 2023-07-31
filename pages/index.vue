<template>
  <div>
    <h1>Todo list</h1>
    <div v-if="data === undefined && !error">loading...</div>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="data" v-for="(item, index) in data" :key="index">
          <td>{{ item.title }}</td>
          <td>
            <nuxt-link :to="`/todos/${item.id}`"> Xem </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useSWRV from "swrv";

const endpoint = ref("/todos");
const fetcher = () => {
  return fetch(`https://jsonplaceholder.typicode.com${endpoint.value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => data.slice(0, 10));
};

const { data, error } = useSWRV(endpoint.value, fetcher);
</script>
