const db = require('quick.db')
export function balance(user) {
    const balance =  db.get(user)
    return balance
}
export function deposit(user, amount ) {
    const currentbalance = db.get(user);
    const newbalance = currentbalance + amount;
    return newbalance
}
export function withdraw(user, amount) {
    const currentbalance = db.get(user);
    const newbalance = currentbalance - amount;
    return newbalance
}