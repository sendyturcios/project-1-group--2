
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
               "options": ["20's", "30's", "40's", "50's", "60+"],
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
               "options": ["0", "1 meal/ day", "2 meals/ day"],
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
        
    let QandA = 1; 
   
    
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
        surveyResults[0].q.answer = ans1;

        if (ans1 === ""){
            let p = $("<p>");
            let warningMsg = p.text("GIVE ME YOUR NAME!!!");
            $("#warning-msg").html(warningMsg);
        } else {
            $("#question").empty();
            $("#anwsers").empty();
            $("#warning-msg").empty();
            grabQuestion();
        }
    });
    
    
    function grabQuestion() {
        if (QandA < 16){
        $("#question").text(surveyResults[QandA].q.question);
        grabAnswers();
        console.log(surveyResults[QandA].q.question);
        } else {
            $("#question").empty(); 
        }
    }
    
    function grabAnswers(){
        $("#anwsers").empty();
        let answers = "";
        let ansBtn;
        if (QandA < 16) {
        for (let i = 0; i < surveyResults[QandA].q.options.length; i++){
            answers = surveyResults[QandA].q.options[i];
            ansBtn = $("<button>");
            ansBtn.text(answers).attr({
                "class": "btn",
                "data-btn": answers
            });
            $("#anwsers").append(ansBtn);
            if (QandA === 15){
                $(ansBtn).empty();
                let a = $("<a>");
                a.text(answers).attr("href", "results.html");
                $(ansBtn).append(a);
            }
        }    

     }
    }
    
    $(document).on("click", ".btn", function(){
        console.log(QandA);
        let btnVal = $(this).attr("data-btn");
        console.log("this console " + btnVal);
        surveyResults[QandA].q.answer = btnVal
        console.log(surveyResults[QandA].q.answer)
        QandA++;
        grabQuestion();
        grabAnswers();
        if (surveyResults[15].q.answer) {
       // alert("hello");  
        sendSurveyResultsToStorage(surveyResults)
        }
    })


    })
    
    