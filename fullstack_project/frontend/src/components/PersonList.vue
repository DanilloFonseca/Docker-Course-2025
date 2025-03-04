<script setup>
import { ref, onMounted } from 'vue'

// Estado para armazenar as pessoas
const people = ref([])

// Estado para armazenar os dados do formulário
const newPerson = ref({ name: '' })

// Função para buscar as pessoas
const fetchPeople = async () => {
  try {
    const response = await fetch('http://localhost:4000/Person/People')
    if (!response.ok) throw new Error('Erro ao buscar pessoas')
    people.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

// Função para adicionar uma nova pessoa
const addPerson = async () => {
  if (!newPerson.value.name) return alert('O nome não pode estar vazio')

  try {
    const response = await fetch('http://localhost:4000/Person/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPerson.value)
    })

    if (!response.ok) throw new Error('Erro ao adicionar pessoa')

    const addedPerson = await response.json()
    people.value.push(addedPerson) // Atualiza a lista

    newPerson.value.name = '' // Limpa o formulário
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

    <h3>Adicionar Pessoa</h3>
    <form @submit.prevent="addPerson">
      <input v-model="newPerson.name" placeholder="Digite o nome" />
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 8px 0;
}

input {
  padding: 8px;
  margin-right: 8px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>