var currentnum = 1;

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
  var q1score = document.getElementById('ans1').value;
  if (q1score == 'caq1') {
    q1score = 1;
  } else {
    q1score = 0;
  }

  var q2score = document.getElementById('ans2').value;
  if (q2score == 'caq2') {
    q2score = 1;
  } else {
    q2score = 0;
  }

  var q3score = document.getElementById('ans3').value;
  if (q3score == 'caq3') {
    q3score = 1;
  } else {
    q3score = 0;
  }

  var q4score = document.getElementById('ans4').value;
  if (q4score == 'caq4') {
    q4score = 1;
  } else {
    q4score = 0;
  }

  var q5score = document.getElementById('ans5').value;
  if (q5score == 'caq5') {
    q5score = 1;
  } else {
    q5score = 0;
  }

  var q6score = document.getElementById('ans6').value;
  if (q6score.toLowerCase() == 'internal') {
    q6score = 1;
  } else {
    q6score = 0;
  }

  var q7score = document.getElementById('ans7').value;
  if (q7score.toLowerCase() == "sbelt") {
    q7score = 1;
  } else {
    q7score = 0;
  }

  var q8score = document.getElementById('ans8').value;
  if (q8score.toLowerCase() == 'tics') {
    q8score = 1;
  } else {
    q8score = 0;
  }

  var q9score = document.getElementById('ans9').value;
  if (q9score == '1,420') {
    q9score = 2;
  } else {
    q9score = 0;
  }

  var q10score = document.getElementById('ans10').value;
  if (q10score == '902,317') {
    q10score = 2;
  } else {
    q10score = 0;
  }

  var q11score = document.getElementById('ans11').value;
  if (q11score == '138,580') {
    q11score = 2;
  } else {
    q11score = 0;
  }

  var q12score = document.getElementById('ans12').value;
  if (q12score == 'caq12') {  
    q12score = 1;
  } else {
    q12score = 0;
  }

  var q13score = document.getElementById('ans13').value;
  if (q13score == 'caq13') {
    q13score = 1;
  } else {
    q13score = 0;
  }

  var q14score = document.getElementById('ans14').value;
  if (q14score == 'caq14') {
    q14score = 1;
  } else {
    q14score = 0;
  }

  var q15score = document.getElementById('ans15').value;
  if (q15score == 'caq15') {
    q15score = 2;
  } else {
    q15score = 0;
  }

  var totalscore = q1score + q2score + q3score + q4score + q5score + q6score + q7score + q8score + q9score + q10score + q11score + q12score + q13score + q14score + q15score;

  alert("You got a score of: " + totalscore);

 if (totalscore > 17) {
    alert("You did...AMAZING! Your getting E8");
  } else {
    alert("Commendable effort, lets work harder to get that E8");
  }
}


