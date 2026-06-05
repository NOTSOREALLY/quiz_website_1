let currentnum = 1;

function next(totalquestions){
 let cq = document.getElementById("q" + currentnum); 
 if (cq) cq.style.display = "none";

currentnum++;

if (currentnum <= totalquestions){
   let nq = document.getElementById("q" + currentnum);
   if (nq) nq.style.display = "block";
 }
}
