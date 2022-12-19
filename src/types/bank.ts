import { Branch } from './branch';
import { Customer } from './customer';
import { Transaction } from './transactions';

export class Bank {
    private name: string;
    private branches: Branch[];

    constructor(name: string, branches: Branch[]) {
        this.name = name;
        this.branches = branches;
    }

    getName() {
        return this.name;
    }

    getBranches() {
        return this.branches;
    }

    addBranch(branch: Branch): boolean {
        let branchAdded: boolean;
        this.getBranches().forEach((currentBranch) => {
            if (currentBranch.getName() === branch.getName()) {
                branchAdded = false;
                return;
            }})
        this.getBranches().push(branch);
        branchAdded = true;
        return branchAdded;
    }

    findBranchByName(branchName: string) {       
        const foundBranches: Branch[] = this.branches.filter(branch => branch.getName() === branchName);
        return foundBranches;
    }

    checkBranch(branch: Branch) {
        let branchFound: boolean;
        if (this.branches.find(item => item === branch)) {
            branchFound = true;
        } else {
            branchFound = false;}
        return branchFound;
    }
    
    addCustomer(branch: Branch, customer: Customer): boolean {
        return branch.addCustomer(customer);
    }

    addCustomerTransaction(branch: Branch, customerId: string, transaction: number): boolean {
        return branch.addCustomerTransaction(customerId, transaction);
    }

    listCustomers(branch: Branch, listCustomerTransactions: boolean): boolean {
        const branchFound: boolean = this.checkBranch(branch);

        if (branchFound) {
            const customers: Customer[] = branch.getCustomers();
            customers.forEach((customer) => {
                console.log(`Customer name: ${customer.getName()}`);

                if (listCustomerTransactions) {
                    if (customer.getTransactions().length > 0 ) {
                        console.log(`${customer.getName()}'s transactions in ${branch.getName()}: `);

                        const transactions: Transaction[] = customer.getTransactions();

                        transactions.forEach((action) => {
                            console.log(`Amount: ${action.amount}, date: ${action.date}`);
                        })
                    }
                } else {
                    console.log(`${customer.getName()} has no transaction in ${branch.getName()}}`);
                }
            })
        }

        return branchFound;
    }
}