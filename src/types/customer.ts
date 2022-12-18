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

    getBalance(): number {
        let balance = 0;
        this.transactions.forEach((action) => {
            balance += action.amount;
        })
        return balance;
    }

    addTransaction(action: number): boolean {
        let transactionAdded: boolean;
        const balance = this.getBalance();
        if (balance + action < 0) {
            transactionAdded = false;
        } else {
            this.transactions.push({amount: action, date: new Date()});
            transactionAdded = true;
        }
        return transactionAdded;
    }
}