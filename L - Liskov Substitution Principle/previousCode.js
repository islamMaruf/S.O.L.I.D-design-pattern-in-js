class Bird{
    fly(){
        console.log('I Can Fly')
    }
}
class Duck extends Bird{
    quack(){
        console.log('I Can Quack')
    }
}
class Penguin extends Bird{
    fly(){
        throw new Error('Can not fly')
    }
    swim(){
        console.log('I Can Swim')
    }
}

function makeBirdFly(bird) {
    bird.fly();
}
const duck = new Duck();
const penguin = new Penguin();
makeBirdFly(duck);
makeBirdFly(penguin);