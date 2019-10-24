/* NOTE FOR SELF 
 * LEXICAL SCOPE IS USED BY ARROW FUNCTIONS 
 * CONTEXTUAL SCOPE IS USED BY NORMAL FUNCTIONS 
 * The lexical scope inherits the scope environment of the parent function that is calling the arrow function 
 * The contextual scope inherits the scope environment of the current function that's being called 
 * This means that the function def would not work as this does not exist in the function f(), unless you bind it, or make a variable for example self set to this which'd be from the parent scope 
 * The arrow function would work
*/

class Apple { 
	constructor() {
		this.Test = 20; 
    }

    def() {
        function f() {
            return ++this.Test;
        }
        return f()
    }

	arrow() {
        let a = () => ++this.Test;
		return a();
    }
}

var Fruit = new Apple();
console.log(Fruit.arrow());

function CreateQuestion(Question, Answers) {
    let Message = document.createElement("P");
    Message.setAttribute("CLASS", "white-text");
    document.getElementById("Questions").appendChild(Message);
    Message.innerHTML = Question;


    for (Option of Answers) {
        let Label = document.createElement("LABEL");
        Message.appendChild(Label);

        let NewLine = document.createElement("BR");
        Label.appendChild(NewLine); 

        let Radio = document.createElement("INPUT");
        Radio.setAttribute("CLASS", "with-gap");
        Radio.setAttribute("TYPE", "radio");
        Radio.setAttribute("NAME", Question);

        let Span = document.createElement("SPAN");
        Span.innerHTML = Option;
        Span.setAttribute("CLASS", "white-text");

        Label.appendChild(Radio);
        Label.appendChild(Span);
    }
}

$.get("https://opentdb.com/api.php?amount=10", null, function (DATA) {
    JSON_PARSED = DATA;
    if (JSON_PARSED) {

        let QUESTION_INFO = JSON_PARSED.results;
        let CurrentScore = 0;

        for (let i in QUESTION_INFO) {
            let Question = QUESTION_INFO[i].question;
            let Answer = QUESTION_INFO[i].correct_answer;

            let Options = [Answer];
            for (let IncorrectAnswer of QUESTION_INFO[i].incorrect_answers) {
                Options.push(IncorrectAnswer);
            }

            let InputAnswer = CreateQuestion(Question, Options);
        }
    }
});
