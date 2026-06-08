let currentnum = 1;

function next(){
 let cq = document.getElementById("q" + currentnum); 
 if (cq) cq.style.display = "none";

currentnum++;

  let nq = document.getElementById("q" + currentnum);
  if (nq) nq.style.display = "grid";
}

function back(){

   let cq = document.getElementById("q" + currentnum);
   if (cq) cq.style.display = "none";

   currentnum--;

   let bq = document.getElementById("q" + currentnum);
   if (bq) bq.style.display = "grid";
}

function submit(){
 var q1score=document.getElementById('q1').value;
 if (q1score =='x'){
  q1score=value=1
 } else{
  q1score=value=0
 }
 var totalscore = q1ans + q2ans + q3ans + q4ans+ q5ans+ q6score + q7score + q8score + q9score + q10score+ q11score+ q12ans + q13ans+ q14ans+ q15score;
 alert( "You got a score of: "+ totalscore )

 if (totalscore>12){
  alert("You did...AMAZING!" Your getting E8")
   else if(totalscore>6){
  alert("Commendable effort, lets work harder to get that E8")
 } else{
  alert("Good job! Right on track to that E8)
 }
}


