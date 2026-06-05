let currentnum = 1;

function next(totalquestions){
 let cq = document.getElementById("q" + currentnum); 
 if (cq) cq.style.display = "none";

currentnum++;

   let nq = document.getElementById("q" + currentnum);
   if (nq) nq.style.display = "grid";
 }
}

function back() {

    let cq = document.getElementById("q" + currentnum);
    if (cq) cq.style.display = "none";

    currentnum--;

    let bq = document.getElementById("q" + currentnum);
    if (bq) bq.style.display = "grid";
}
