class FlyingBird {
    fly() {
        console.log('I Can Fly')
    }
}

class SwimmingBird {
    swim() {
        console.log('I can Swim')
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log('I Can Quack')
    }
}

class Penguin extends SwimmingBird {
    dance() {
        console.log('I Can Dance')
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

function makeBirdSwim(bird) {
    bird.swim()
}

const duck = new Duck();
const penguin = new Penguin();
makeBirdFly(duck);
makeBirdSwim(penguin);