class BankAccount {
    constructor(balance) {
        this.balance = 0; 
        this.transactions = new Transactions();
    }
  
    deposit(amt){
        this.balance += amt;
        this.transactions.deposits.push(amt);
    } //adds money into account 
    
    withdraw(amt){
        this.balance -= amt;
        this.transactions.withdrawals.push(amt);

    } //deducts money from account
  
    checkBalance(){
        return `Your account balance is $${this.balance}.`;
    } //gives user their balance with a message "Your account balance is $120" (or whatever accurate amount is)
  
    getTransactions(){
        return this.transactions;
        
    } //returns an object of all transactions 
    // transactions data should be stored like: 


    

  }

 function Transactions(){
     this.deposits = [];
     this.withdrawals = [];
 }