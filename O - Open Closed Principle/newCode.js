function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoice();
        console.log('');
    })

}

class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log('1 , true');
        console.log('0 , false');
    }
}

class MultipleQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoice() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        })
    }

}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log('__________')
    }

}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoice() {
        console.log('Maximum: _______________')
        console.log('Minimum: _______________')

    }
}

const questions = [
  new BooleanQuestion('This video in useful'),
  new MultipleQuestion('What is your favorite language?',['HTML','CSS','JS','PHP']),
  new TextQuestion('What is your name'),
  new RangeQuestion('What is speed Limit in your city')
];
printQuiz(questions);
