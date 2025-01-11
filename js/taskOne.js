class Account  {
    constructor(prototype) {
    const {login, email} = prototype
    this.login = login;
    this.email = email;

}
getInfo() {
    return ` акаунт з нікнеймом ${this.login} і з поштою ${this.email}`
}
}


console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

console.log(poly.getInfo()) // Login: Poly, Email: poly@mail.com