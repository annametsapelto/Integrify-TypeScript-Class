import {Customer} from './customer';

export class Branch {
    private name: string
    private customers: Customer[]

    constructor(name: string, customers: Customer[]) {
        this.name = name;
        this.customers = customers;
    }

    getName() {
        return this.name;
    }

    getCustomers() {
        return this.customers;
    }

    addCustomer(customer: Customer) {
        //code here
        return true;
    }

    addCustomerTransaction(id: string) {
        //code here
        return true;
    }

    findCustomer(id: string) {
        return Customer;
    }
}