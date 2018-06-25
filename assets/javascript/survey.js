
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
        sendSurveyResultsToStorage(surveyResults);
        window.open("results.html", "_self");
        }
    })

    
    if (!(window.JSON && window.JSON.parse)) {
        (function () {
            function g(a) {
                var b = typeof a; if ("object" == b) if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
                else if ("function" == b && "undefined" == typeof a.call) return "object"; return b
            }; function h(a) { a = "" + a; if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try { return eval("(" + a + ")") } catch (b) { } throw Error("Invalid JSON string: " + a); } function i(a, b) { var c = []; j(new k(b), a, c); return c.join("") } function k(a) { this.a = a }
            function j(a, b, c) {
                switch (typeof b) {
                    case "string": l(b, c); break; case "number": c.push(isFinite(b) && !isNaN(b) ? b : "null"); break; case "boolean": c.push(b); break; case "undefined": c.push("null"); break; case "object": if (null == b) { c.push("null"); break } if ("array" == g(b)) { var f = b.length; c.push("["); for (var d = "", e = 0; e < f; e++)c.push(d), d = b[e], j(a, a.a ? a.a.call(b, "" + e, d) : d, c), d = ","; c.push("]"); break } c.push("{"); f = ""; for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (d = b[e], "function" != typeof d && (c.push(f), l(e, c), c.push(":"),
                        j(a, a.a ? a.a.call(b, e, d) : d, c), f = ",")); c.push("}"); break; case "function": break; default: throw Error("Unknown type: " + typeof b);
                }
            } var m = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\u0008": "\\b", "\u000c": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" }, n = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
            function l(a, b) { b.push('"', a.replace(n, function (a) { if (a in m) return m[a]; var b = a.charCodeAt(0), d = "\\u"; 16 > b ? d += "000" : 256 > b ? d += "00" : 4096 > b && (d += "0"); return m[a] = d + b.toString(16) }), '"') }; window.JSON || (window.JSON = {}); "function" !== typeof window.JSON.stringify && (window.JSON.stringify = i); "function" !== typeof window.JSON.parse && (window.JSON.parse = h);
        })();
    }

    function sendSurveyResultsToStorage(surveyResults) {
        window.localStorage.setItem("answers", JSON.stringify(surveyResults));
    }

    function getSurveyResultsFromStorage() {
        let answerString = window.localStorage.getItem("answers");
        let answerObject = JSON.parse(answerString);
        return answerObject;
    }

    function sendCategoryToStorage(category) {
        window.localStorage.setItem("category", category);
    }

    function getCategoryFromStorage() {
        let cat = window.localStorage.getItem("category");
        return cat;
    }

})

