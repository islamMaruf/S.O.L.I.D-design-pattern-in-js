const questions = [
    {
        type: 'boolean',
        description: 'This video is useful'

    },
    {
        type: 'multiplechoice',
        options: ['CSS', 'HTML', 'JS', 'PHP'],
        description: 'What is your favorite language'

    },
    {
        type: 'text',
        description: 'Describe your favorite JS feature'
    },
    {
        type: 'range',
        description: 'What is speed limit in your city?'
    }
];

function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        switch (question.type) {
            case 'boolean':
                console.log('1 , true');
                console.log('0 , false');
                break;
            case 'multiplechoice' :
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`)
                });
                break;
            case 'text':
                console.log('____________');
                break;
            case 'range':
                console.log('Maximum: ___________________');
                console.log('Minimum: ___________________');

        }
    })

}

printQuiz(questions);