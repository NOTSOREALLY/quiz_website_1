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
 if (q1score =='caq1'){
  q1score=value=1
 } else{
  q1score=value=0
 }
 var q2score=document.getElementById('q2').value;
 if (q2score =='caq2'){
  q2score=value=1
 } else{
  q2score=value=0
 }
 var q3score=document.getElementById('q3').value;
 if (q3score =='caq3'){
  q3score=value=1
 } else{
  q3score=value=0
 }
 var q4score=document.getElementById('q4').value;
 if (q4score =='caq4'){
  q4score=value=1
 } else{
  q4score=value=0
 }
 var q5score=document.getElementById('q5').value;
 if (q5score =='caq5'){
  q5score=value=1
 } else{
  q5score=value=0
 }
 var q6score=document.getElementById('q6').value;
 if (q6score =='internal'){
  q6score=value=1
 } else{
  q6score=value=0
 }
 var q7score=document.getElementById('q7').value;
 if (q7score =='){
  q7score=value=1
 } else{
  q7score=value=0
 }
 var q8score=document.getElementById('q8').value;
 if (q8score =='caq5'){
  q8score=value=1
 } else{
  q8score=value=0
 }
 var q9score=document.getElementById('q9').value;
 if (q9score ==''){
  q9score=value=1
 } else{
  q9score=value=0
 }
 var q10score=document.getElementById('q10').value;
 if (q10score ==''){
  q10score=value=1
 } else{
  q10score=value=0
 }
 var q11score=document.getElementById('q11').value;
 if (q5score =='caq5'){
  q5score=value=1
 } else{
  q5score=value=0
 }
 var q12score=document.getElementById('q12').value;
 if (q1score =='caq12'){
  q12score=value=1
 } else{
  q12score=value=0
 }
 var q13score=document.getElementById('q13').value;
 if (q13score =='caq13'){
  q13score=value=1
 } else{
  q13score=value=0
 }
 var q14score=document.getElementById('q14').value;
 if (q14score =='caq14'){
  q14score=value=1
 } else{
  q14score=value=0
 }
 var q14score=document.getElementById('q14').value;
 if (q14score =='as pirce increases quanitity demanded decreases vice versa ceteris paribus'){
  q14score=value=3
 } else{
  q14score=value=0
 }
}
 var totalscore = q1score + q2score + q3score + q4score+ q5score+ q6score + q7score + q8score + q9score + q10score+ q11score+ q12score + q13score q14sc0re+ q15score;
 alert( "You got a score of: "+ totalscore )

 if (totalscore>12){
  alert("You did...AMAZING! Your getting E8")
   else if(totalscore>6){
  alert("Commendable effort, lets work harder to get that E8")
 } else{
  alert("Good job! Right on track to that E8")
 }
}


