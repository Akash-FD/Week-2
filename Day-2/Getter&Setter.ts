class B {

    //#balance              // we can also give # to make it private
    private balance;        // Private property

    constructor(balance:number) {
        this.balance = balance;
    }

    get balance1() {
        return this.balance;
    }

    set balance1(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative!");
        } else {
            this.balance = amount;
        }
    }
}

const acc = new B(1000);
acc.balance1 = 1500;  // "Balance cannot be negative!"
console.log(acc.balance1);


//------- when we use geeter and setter?----------------

