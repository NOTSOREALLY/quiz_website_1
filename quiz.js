let currentnum = 1;

function next(){
 let cq = document.getElementById("q" + currentnum); 
 if (cq) cq.style.display = "none";

currentnum++;

  let nq = document.getElementById("q" + currentnum);
  if (nq) nq.style.display = "show";
}

function back(){

   let cq = document.getElementById("q" + currentnum);
   if (cq) cq.style.display = "none";

   currentnum--;

   let bq = document.getElementById("q" + currentnum);
   if (bq) bq.style.display = "show";
}
function submit(){
 let q1ans = document.getElementById("q1").value;
 let q2ans = document.getElementById("q2").value;
 let q3ans = document.getElementById("q3").value;
 let q4ans = document.getElementById("q4").value;
 let q5ans = document.getElementById("q5").value;
 let q12ans = document.getElementById("q12").value;
 let q13ans = document.getElementById("q13").value;
 let q14ans = document.getElementById("q14").value;
 
 let q6score = 0;
 let q7score = 0;
 let q8score = 0;
 let q9score = 0;
 let q10score = 0;
 let q11score = 0;
 let q15score = 0;

if (q6ans.toLowerCase() == "internal"){
   q6score = 2;
}  else {
   q6score = 0;
}
 if (q7ans.toLowerCase() == "sbelt"){
   q7score = 2;
}  else {
   q7score = 0;
}
 if (q8ans.toLowerCase() == "tics"){
   q8score = 2;
}  else {
   q8score = 0;
}
 if (q9ans.toLowerCase() == "1,420"){
   q9score = 2;
}  else {
   q9score = 0;
}
 if (q10ans.toLowerCase() == "40,240"){
   q10score = 2;
}  else {
   q10score = 0;
}
 if (q11ans.toLowerCase() == "94,000"){
   q11score = 2;
}  else {
   q11score = 0;
}
  if (q15ans.toLowerCase() == "as price increases quantity demanded decreases vice versa ceteris paribus"){
   q15score = 3;
}  else {
   q15score = 0;
}
 var totalscore = q1ans + q2ans + q3ans + q4ans+ q5ans+ q6score + q7score + q8score + q9score + q10score+ q11score+ q12ans + q13ans+ q14ans+ q15score;
 alert( "You got a score of: "+ totalscore )
 
}

