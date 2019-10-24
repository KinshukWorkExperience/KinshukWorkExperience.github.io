
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