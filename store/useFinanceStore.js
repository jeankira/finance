import { defineStore } from 'pinia'

export const useFinanceStore = defineStore('finance', {
  state: () => ({
    transactions: [],
    balance: 1000.00,
  }),
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction)
      this.balance += transaction.type === 'income' ? transaction.amount : -transaction.amount
    }
  }
})
