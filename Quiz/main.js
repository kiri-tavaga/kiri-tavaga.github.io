function check() {
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var correct=0;
    if (q1=="red light") {
        correct ++;
    }
    if (q2=="no passing") {
        correct ++;
    }
    if (q3=="Right") {
        correct ++;
    }
    
    var messages = ["Perfect!", "Almost there", "Keep trying"];
    var pictures = ["img/Win.gif", "img/still.gif", "img/lose.gif"]
    var range;
    if (correct < 1) {
        range = 2;
    }
    if (correct >0 && correct <3) {
        range = 1;
    }
    if (correct >2) {
        range = 0;
    }

document.getElementById("after-submit").style.visibility ="visibile";
document.getElementById("number-correct").innerHTML="You got " + correct + " correct.";
document.getElementById("pictures").src=pictures[range];
document.getElementById("messages").innerHTML=messages[range];
}