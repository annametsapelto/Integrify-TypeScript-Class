import { Branch } from './branch';

export class Bank {
    private name: string;
    private branches: Branch[];

    constructor(name: string, branches: Branch[]) {
        this.name = name;
        this.branches = branches;
    }

    addBranch(branch: Branch) {
        //code here
        return true;
    }

    findBranchByName(branchName: string) {
        //code here
        let foundBranches: Branch[] = [];
        return foundBranches;
    }

    checkBranch(branch: Branch) {
        //code here
        return true;
    }

}