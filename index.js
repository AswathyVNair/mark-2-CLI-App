var readlineSync=require('readline-sync')
var userName=readlineSync.question("What is your name? ")
console.log("\nWELCOME!! "+userName+ " to 🏏 INDIAN CRICKET QUIZ 🏏")
var score=0;
var userAnswer;
function quiz(question,answer)
{

  if(userAnswer===answer)
  {
    console.log("\nYou are RIGHT!! 🤩🤩");
    score=score+1;
  }
  else
  {
    console.log("\nYou are WRONG 😞😞");
  }
  return 0;
}

  
  var questions=[
    "\nHow many times did India win the Cricket World Cup?\na.1   b.2   c.3   d.4\n",

    "\nWhich Year India won the first Cricket World Cup?\na.1983   b.1986   c.2001   d.2011\n",

    "\nWho is the Top Run Scorer in the 2019 Cricket World Cup?\na.V Kholi   b.S Dhawan   c.Rohit Sharma   d.M S Dhoni\n",

    "\nWho is known as The God of Cricket?\na.N Kapil Dev   b.Sachin Tendulkar   c.S M Gavaskar   d.RJ Shasthri\n",

    "\nWhat is the distance between the Popping Crease and the Bowling Crease?\na.4 feet   b.3 feet   c.5 feet   d.6 feet\n",

    "\nWho is known as 'The Haryana Hurricane'?\na.Sunil Gavaskar   b.Kapil Dev   c.R J Shasthri   d.Sachin tendulkar\n",

    "\nAfter how many years does the ICC World Cup take place?\na.5   b.2   c.3   d.4\n",

    "\nWho is known as 'Little Master'?\na.Sachin Tendulkar   b.Kapil Dev   c.Sunil Gavaskar   d.R J Shasthri\n",

    "\nWho won the most IPLs?\na.Chennai Super Kings   b.Royal Challengers Bangalore   c.Mumbai Indians   d.Kolkata Knight Riders\n",

    "\nWhich Indian Captain holds the record for most Tests wins?\na.Sourav Ganguly   b.M S Dhoni   c.Sunil Gavaskar   d.Virat Kohli\n"]
  var answers=[
    "b",
    "a",
    "c",
    "b",
    "a",
    "b",
    "d",
    "c",
    "c",
    "d",]

    for(i=0;i<questions.length;i++)
    {
      userAnswer=readlineSync.question(questions[i])
      quiz(questions[i],answers[i])
      console.log("SCORE:"+score)
    }
    console.log("\nYour final score is "+score)
    console.log("\nCheck out high scores:\nAswathy:10")

