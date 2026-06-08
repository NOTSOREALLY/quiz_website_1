let currentnum = 1;

function next(){
 let cq = document.getElementById("q" + currentnum); 
 if (cq) cq.style.display = "none";

currentnum++;

  let nq = document.getElementById("q" + currentnum);
  if (nq) nq.style.display = "inline-block";
}

function back(){

   let cq = document.getElementById("q" + currentnum);
   if (cq) cq.style.display = "none";

   currentnum--;

   let bq = document.getElementById("q" + currentnum);
   if (bq) bq.style.display = "inline-block";
}

function submit(){
 let q1ans = document.getElementById("q1").value;
 let q2ans = document.getElementById("q1").value;
 let q3ans = document.getElementById("q1").value;
 let q4ans = document.getElementById("q1").value;
 let q5ans = document.getElementById("q1").value;
 let q6ans = document.getElementById("q1").value;
 let q7ans = document.getElementById("q1").value;
 let q8ans = document.getElementById("q1").value;
 let q9ans = document.getElementById("q1").value;
 let q10ans = document.getElementById("q1").value;
 let q11ans = document.getElementById("q1").value;
 let q12ans = document.getElementById("q1").value;
 let q13ans = document.getElementById("q1").value;
 let q14ans = document.getElementById("q1").value;
 let q15ans = document.getElementById("q1").value;
 var totalscore = q1ans + q2ans + q3ans + q4ans+ q5ans+ q6ans + q7ans + q8ans + q9ans + q10ans+ q11ans+ q12ans + q13ans+ q14ans+ q15ans;
 alert( "You got a score of: "+ totalscore
 
}

