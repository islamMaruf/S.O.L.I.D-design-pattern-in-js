class Stripe {
    constructor(user) {
        this.user = user
    }
    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents/100} with Stripe`)
    }
}

class Paypal {
    makePayment(user,amountInDollars){
        console.log(`${user} made payment of $${amountInDollars} with PayPal`)

    }
}
class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user)
    }
    pay(amountInCents){
        this.stripe.makePayment(amountInCents * 100);
    }
}
class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }
    pay(amountInCents){
        this.paypal.makePayment(this.user,amountInCents);
    }
}

class Store {
    constructor(paymentProcessor) {
        this.payProcessor = paymentProcessor;

    }
    purchaseBike(quantity) {
        this.payProcessor.pay(200 * quantity)
    }

    purchaseHelmet(quantity) {
        this.payProcessor.pay(15 * quantity)
    }
}
// stripe payment
const store = new Store(new StripePaymentProcessor('john'));
store.purchaseBike(2);
store.purchaseHelmet(10);

//paypal payment
const store1 = new Store(new PaypalPaymentProcessor('john_new'));
store1.purchaseBike(2);
store1.purchaseHelmet(10);