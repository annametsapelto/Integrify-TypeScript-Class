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

    addCustomer(customer: Customer): boolean {
        let customerAdded: boolean = false;
        this.customers.forEach((currentCustomer) => {
            if (currentCustomer.getId() === customer.getId()) {
                customerAdded = false;
            }
        })
        if (customer !== undefined) {
            this.getCustomers().push(customer);
            customerAdded = true;
        }
        return customerAdded;
    }

    addCustomerTransaction(id: string, transaction: number): boolean {
        let customerTransactionComplete: boolean;
        const customer = this.findCustomer(id);
        if(customer !== null) {
            customer.addTransaction(transaction);
            customerTransactionComplete = true;
        } else {
            customerTransactionComplete = false;
        }
        return customerTransactionComplete;
    }

    findCustomer(id: string): Customer | null {
        const customerFilter: Customer[] = this.customers.filter(
            (customer) => customer.getId() === id
        );

        if (customerFilter.length === 0) {
            return null;
        } else {
            return customerFilter[0];
        }
    }
}