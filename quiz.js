let currentnum = 1;

function next(){
 let cq = document.getElementById("q" + currentnum); 
 if (cq) cq.style.display = "none; inline-block";

currentnum++;

   let nq = document.getElementById("q" + currentnum);
   if (nq) nq.style.display = "grid; inline-block";
}

function back() {

    let cq = document.getElementById("q" + currentnum);
    if (cq) cq.style.display = "none; inline-block";

    currentnum--;

    let bq = document.getElementById("q" + currentnum);
    if (bq) bq.style.display = "grid; inline-block";
}
