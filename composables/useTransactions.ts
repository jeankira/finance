export const useTransactions = () => {
    const financeStore = useFinanceStore()
    
    const createTransaction = (transaction) => {
      transaction.id = Date.now()
      financeStore.addTransaction(transaction)
    }
  
    return {
      transactions: computed(() => financeStore.transactions),
      balance: computed(() => financeStore.balance),
      createTransaction
    }
  }