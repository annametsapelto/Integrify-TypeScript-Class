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
        const foundBranches: Branch[] = this.branches.filter(branch => branch.getName() === branchName);
        return foundBranches;
    }

    checkBranch(branch: Branch) {
        let branchFound: boolean;
        if (this.branches.find(item => item === branch)) {
            return branchFound = true;
        } else {
            return branchFound = false;}
        
    }

}