/**
 * @file JS classes lab
 * @author Dylan Mayor
 */
'use strict';

/**
 * Class used to represent a bank account
 */
class BankAccount {
  // Static incrementer used to give a unique accnt num
  static #ACCT_INC = 0;

  /**
   * Constructs a new bank account
   * @constructor
   * @param {string} ownerName Name of the account owner
   * @param {number} balance Total amount in bank account
   */
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = BankAccount.#ACCT_INC++;
  }

  /**
   * Deposits money into the account
   * @param {number} amnt amount to deposit
   */
  deposit(amnt) {
    this.balance += amnt;
  }

  /**
   * Withdraws money into the account
   * @param {number} amnt Amount to withdraw
   */
  withdraw(amnt) {
    if (this.balance - amnt < 0) throw Error("Not enough balance to withdraw");

    this.balance -= amnt;
  }

  /**
   * stringified version of the account
   * @return {string} stringified version of the account
   */
  toString() {
    return `Bank accnt: ${this.acctNum} - ${this.ownerName} - ${this.balance}`;
  }

}

/**
 * Class used to represent a checking account
 * @extends BankAccount
 */
class CheckingAccount extends BankAccount {
  /**
   * Constructs a new checking account
   * @constructor
   * @param {string} ownerName name of the account owner
   * @param {number} balance amount in checking account
   * @param {boolean} overdraftEnabled whether overdraft is possible
   */
  constructor(ownerName, balance, overdraftEnabled=true) {
    super(ownerName, balance);
    this.overdraftEnabled = overdraftEnabled;
  }

  /**
   * Withdraws money from the account
   * @override
   * @param {number} amnt Amount to withdraw
   */
  withdraw(amnt) {
    if (this.overdraftEnabled && this.balance - amnt < 0) {
      throw Error("Not enough balance to withdraw");
    }

    this.balance -= amnt;
  }
}

/**
 * Class used to represent a savings account
 * @extends BankAccount
 */
class SavingsAccount extends BankAccount {
  /**
   * Throws an error as money can't be taken from
   * a savings account
   * @override
   * @param {number} amnt specified amount
   */
  withdraw(amnt) {
    throw Error("Cannot withdraw from savings account");
  }
}

/**
 * Class used to represent a person
 */
class Person {
  /**
   * Constructs a new person
   * @param {string} first first name
   * @param {string} last last name
   */
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  /**
   * Returns a hello message
   * @return {string} returns a hello message
   */
  sayHello() {
    return `Hello I'm ${this.firstName} ${this.lastName}`;
  }

  /**
   * Returns a hello message
   * @returns {string} returns a hello message
   */
  toString() {
    return this.sayHello();
  }
}

/**
 * Class used to represent an employee
 * @extends Person
 */
class Employee extends Person {
  /**
   * Constructs a new employee
   * @param {string} first first name
   * @param {string} last last name
   * @param {string} company company they work for
   * @param {string} wage wage of the employee
   */
  constructor(first, last, company, wage) {
    super(first, last);
    this.company = company;
    this.wage = wage;
    this.active = true;
  }

  /**
   * Sets a new wage
   * @param {string} newWage the new wage
   */
  receiveRaise(newWage) {
    this.wage = wage;
  }

  /**
   * terminates the employee
   */
  terminate() {
    active = false;
  }

  /**
   * Returns a hello message with company & wage info
   * @return {string} Returns a hello message with company & wage info
   */
  toString() {
    return super.toString() + `: ${this.company} - ${this.wage}`;
  }
}

/**
 * Class used to represent an employee
 * @extends Employee
 */
class Manager extends Employee {
  /**
   * Constructs a new manager
   * @param {*} first first name
   * @param {*} last last name
   * @param {*} company company they work for
   * @param {*} wage wage of the manager
   * @param {*} dpmnt department they manage
   */
  constructor(first, last, company, wage, dpmnt) {
    super(first, last, company, wage);
    this.department = dpmnt;
  }

  /**
   * Gives a raise to the passed employee
   * @param {Employee} employee the employee receiving a wage
   * @param {string} amnt the new wage
   */
  giveRaise(employee, amnt) {
    employee.receiveRaise(amnt);
  }

  /**
   * Returns an employee message with company & department info
   * @return {string} Returns an employee message with company & department info
   */
  toString() {
    return super.toString() + ` - ${this.department}`;
  }
}

/**
 * Class used to represent a worker
 * @extends Employee
 */
class Worker extends Employee {
  /**
   * Constructs a new worker
   * @param {string} first first name
   * @param {string} last last name
   * @param {string} company company they work for
   * @param {string} wage wage of the worker
   * @param {string} manager Employee manager
   */
  constructor(first, last, company, wage, manager=null) {
    super(first, last, company, wage);
    this.manager = manager;
  }

  /**
   * work, work, work...
   * @return {string} work, work, work...
   */
  work() {
    return 'work, work, work...';
  }

  /**
   * Returns an employee message with manager info
   * @return {string} Returns an employee message with manager info
   */
  toString() {
    return super.toString() + ` Boss: ${this.manager}`;
  }
}

// testing
const accnt = new BankAccount('dylan', 100);
const savAccnt = new SavingsAccount('dylan', 1_000);
const curAccnt = new CheckingAccount('dylan', 1_000);
const person = new Person('dylan', 'mayor');
const employee = new Employee('dylan', 'mayor', 'Barclays', '$1_000_000');
const manager = new Manager('dylan', 'mayor', 'Barclays', '$1_000_000', 'HR')
const worker = new Worker('dylan', 'mayor', 'Barclays', '$1_000_000', manager);

console.log(accnt.toString());
console.log(savAccnt.toString());
console.log(curAccnt.toString());
console.log(person.toString());
console.log(employee.toString());
console.log(manager.toString());
console.log(worker.toString());