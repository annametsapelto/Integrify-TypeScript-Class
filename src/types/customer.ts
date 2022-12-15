import { Transaction } from './transactions';

export class Customer {
    private name: string
    private id: string
    private transactions: Transaction[]

    constructor(name: string, id: string, transactions: Transaction[]) {
        this.name = name;
        this.id = id;
        this.transactions = transactions;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getTransactions() {
        return this.transactions;
    }

    getBalance() {
        let balance = this.transactions.map(action => {})
        return balance;
    }

    addTransaction(action: number) {
        let transactionAdded: boolean;
        const newAction: Transaction = (action, new Date());
        this.getTransactions().push(newAction);
    }
}