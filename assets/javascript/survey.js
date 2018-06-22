
$(document).ready(function() { 


    let surveyResults = [
       {
           "q": {
               "question": "What is your name?",
               "options": "",
               "answer": "",
           }
       },
       {
           "q": {
               "question": "How old are you?",
               "options": ["18-24", "25-34", "35-44", "45-54", "55+"],
               "answer": "",
           },
       },
       {
           "q": {
               "question": "How often do you workout?",
               "options": ["0", "1-2/ Week", "3-4/ Week"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "How often do you eat a balanced meal?",
               "options": ["0", "1 meal/ day", "2meals/ day"],
               "answer": "",
           }
       },
           {
           "q": {
               "question": "On Average, how many cups of water do you drink per day?",
               "options": ["0", "1-2", "3-5"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "On Average, how many hours of sleep do you get per night?",
               "options": ["3-5", "5-6", "6-8"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "How often to do you feel tired/fatigued?",
               "options": ["Rarely", "Sometimes", "Often", "All the time"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "How often do you feel stressed?",
               "options": ["Rarely", "Sometimes", "Often", "All the time"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "How often do you have trouble focusing?",
               "options": ["Rarely", "Sometimes", "Often", "All the time"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "How often do you get at least 20+ minutes of sun per day?",
               "options": ["Never", "Rarely", "Sometimes", "Often"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "How would you descride your mood?",
               "options": ["Depressed", "Sad", "Neutral", "Happy"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "Are you looking to lose weight?",
               "options": ["Yes", "No"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "How many bowel movements do you have per day?",
               "options": ["0", "1", "2"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "Do you every feel gassy/bloated?",
               "options": ["Rarely", "Sometimes", "Often", "All the time"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "Do dairy products upset your stomach?",
               "options": ["Rarely", "Sometimes", "Often", "All the time"],
               "answer": "",
           }
       },
       {
           "q": {
               "question": "Are you worried about hair loss?",
               "options": ["Yes", "No"],
               "answer": "",
           },
       }
    ]
    
    window.console.log("hello");
    
    var QandA = 1; 
    
    
    //This funtion only creats the first question
    function name(){
        $("#question").text(surveyResults[0].q.question);
        let form = $("<form>");
        let input = $("<input>").attr({
            "type": "text",
            "id": "name"
        });
        let button = $("<button>").text("Go").attr({
            "value": "Go",
            "id": "submit"
        });
        $(form).append(input).append(button);
        $("#anwsers").html(form);
        
    }
    
    name();
    
    $(document).on("click", "#submit", function(event){
        event.preventDefault();
        let ans1 = $("#name").val();
        console.log(ans1);
        surveyResults[0].q.answer = ans1
        $("#question").empty();
        $("#anwsers").empty();
        grabQuestion()
    });
    
    
    function grabQuestion() {
        $("#question").text(surveyResults[QandA].q.question);
        grabanswers();
        console.log(surveyResults[QandA].q.question);
        QandA++;
    }
    
    function grabanswers(){
        let ansDiv = $("<div>");
        for (let i = 0; i < surveyResults[QandA].q.options.length; i++){
            let answers = surveyResults[QandA].q.options[i];
            console.log(answers)
        }
    
    
        $("#answers").append();
    
    }
    
    })
    
    