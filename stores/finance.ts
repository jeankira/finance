import { defineStore } from 'pinia'

export const useFinanceStore = defineStore('finance', {
  state: () => ({
    transactions: [],
    balance: 0
  }),
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction)
      this.calculateBalance()
    },
    calculateBalance() {
      this.balance = this.transactions.reduce((total, transaction) => {
        return transaction.type === 'income' 
          ? total + transaction.amount 
          : total - transaction.amount
      }, 0)
    }
  }
})