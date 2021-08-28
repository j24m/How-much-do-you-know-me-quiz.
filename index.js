var readlineSync=require("readline-sync")
var userName= readlineSync.question("Give me your name! ")
console.log("hey! "+userName," Welcome to this quiz :)");
console.log("Let us see how much do you know me <3");
score=0;
function play(question,answer){
  var userAnswer=readlineSync.question(question)
  if(userAnswer===answer){
    console.log("Yeahhh!! you are right.");
    score=score+1;
    console.log("Your score is:"+score);
  }
  else{
    console.log("Oops!! wrong answer :p");
    console.log("Your score is:"+score);
  }
}
play("Q1. My favourite  beverage? .","Tea");
play("Q2. Which city was i born in? ","Raipur");
play("Q3. What is my age? ","23");
play("Q4. Have i ever been out of India?","No");
play("Q5. What is my mother tongue? ","Mewari");

console.log(userName+" : "+score);
if(score===5){
  console.log("Yeiii!! you did good <3");
}
else if(score>=3){
  console.log("You can do better ;p");
}
else{
  console.log("We need to spend more time bruh XD");
}




