<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Gestão de Contas a Pagar e Receber</h1>
    
    <div class="mb-4">
      <h2>Saldo Atual: R$ {{ balance.toFixed(2) }}</h2>
    </div>
    
    <div>
      <button @click="goToTransacoes" class="bg-blue-500 text-white p-2 rounded">Ver Transações</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const balance = ref(1000.50)  // Exemplo de saldo
const router = useRouter()

const goToTransacoes = () => {
  router.push('/transacoes')
}
</script>

<style scoped>
/* Estilos específicos para esta página */
</style>
