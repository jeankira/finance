<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Transações</h1>
      
      <form @submit.prevent="addTransaction">
        <input v-model="transaction.description" placeholder="Descrição" class="p-2 mb-2 border rounded" />
        <input v-model="transaction.amount" type="number" placeholder="Valor" class="p-2 mb-2 border rounded" />
        <select v-model="transaction.type" class="p-2 mb-2 border rounded">
          <option value="income">Receita</option>
          <option value="expense">Despesa</option>
        </select>
        <button type="submit" class="bg-green-500 text-white p-2 rounded">Adicionar</button>
      </form>
  
      <ul>
        <li v-for="trans in transactions" :key="trans.id" class="p-2">
          {{ trans.description }} - R$ {{ trans.amount }} ({{ trans.type }})
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const transactions = ref([])
  const transaction = ref({ description: '', amount: 0, type: 'income' })
  
  const addTransaction = () => {
    if (transaction.value.description && transaction.value.amount > 0) {
      transactions.value.push({
        ...transaction.value,
        id: transactions.value.length + 1
      })
      transaction.value = { description: '', amount: 0, type: 'income' }
    } else {
      alert('Por favor, preencha todos os campos corretamente.')
    }

    const { transactions, balance, addTransaction } = useFinanceStore()
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para a página de transações */
  </style>
  