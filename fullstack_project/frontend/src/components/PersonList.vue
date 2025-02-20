<script setup>
import { ref, onMounted } from 'vue'

const people = ref([])

const fetchPeople = async () => {
  try {
    const response = await fetch('http://localhost:4000/Person/People')
    if (!response.ok) throw new Error('Erro ao buscar pessoas')
    people.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchPeople)
</script>

<template>
  <div>
    <h2>Lista de Pessoas</h2>
    <ul>
      <li v-for="person in people" :key="person._id">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>
