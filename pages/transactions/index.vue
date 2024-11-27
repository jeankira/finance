<template>
    <div class="container mx-auto p-4">
      <h1>Gestão Financeira</h1>
      
      <div>Saldo Atual: R$ {{ balance.toFixed(2) }}</div>
  
      <form @submit.prevent="addNewTransaction">
        <select v-model="newTransaction.type">
          <option value="income">Receita</option>
          <option value="expense">Despesa</option>
        </select>
  
        <input 
          v-model="newTransaction.description" 
          placeholder="Descrição"
        />
  
        <input 
          type="number" 
          v-model="newTransaction.amount" 
          placeholder="Valor"
        />
  
        <button type="submit">Adicionar Transação</button>
      </form>
  
      <div>
        <h2>Transações</h2>
        <ul>
          <li 
            v-for="transaction in transactions" 
            :key="transaction.id"
          >
            {{ transaction.description }} - 
            R$ {{ transaction.amount.toFixed(2) }} 
            ({{ transaction.type }})
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  // Importando o composable que gerencia transações
  const { transactions, balance, createTransaction } = useTransactions()
  
  // Definindo o estado da nova transação
  const newTransaction = ref({
    type: 'income',
    description: '',
    amount: 0
  })
  
  // Função para adicionar nova transação
  const addNewTransaction = () => {
    // Validação dos campos
    if (!newTransaction.value.description || newTransaction.value.amount <= 0) {
      alert("Por favor, preencha todos os campos corretamente.")
      return
    }
  
    // Criação da transação
    createTransaction(newTransaction.value)
    
    // Limpar formulário após adicionar a transação
    newTransaction.value = {
      type: 'income',
      description: '',
      amount: 0
    }
  }
  </script>
  
  <style scoped>
  /* Estilos personalizados (se necessário) */
  </style>
  