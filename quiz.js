let currentQ = 1;

const correctAnswers = ["B", "PEEL", "C", "A", "D", "B", "C", "A", "D", "B", "C", "A", "D", "B", "C"]; 

function showQuestion(qNum) {
    for (let i = 1; i <= 15; i++) {
        let q = document.getElementById("q" + i);
        if (q) q.style.display = "none";
    }
    let qToShow = document.getElementById("q" + qNum);
    if (qToShow) qToShow.style.display = "block";
    
    document.getElementById("prevBtn").disabled = (qNum === 1);
    if (qNum === 15) {
        document.getElementById("nextBtn").innerHTML = "SHOW SCORE";
    } else {
        document.getElementById("nextBtn").innerHTML = "NEXT";
    }
}

function calculateAndShowScore() {
    let score = 0;
    for (let i = 1; i <= 15; i++) {
        let userAns = document.getElementById("ans" + i).value;
        let correct = correctAnswers[i-1];
        if (userAns && userAns.trim().toUpperCase() === correct.trim().toUpperCase()) {
            score++;
        }
    }
    document.getElementById("quizArea").style.display = "none";
    document.getElementById("navButtons").style.display = "none";
    document.getElementById("scorePanel").style.display = "block";
    document.getElementById("scoreValue").innerText = score + " / 15";
}

window.onload = function() {
    showQuestion(1);
    
    document.getElementById("prevBtn").onclick = function() {
        if (currentQ > 1) {
            currentQ--;
            showQuestion(currentQ);
        }
    };
    
    document.getElementById("nextBtn").onclick = function() {
        if (currentQ === 15) {
            calculateAndShowScore();
        } else {
            currentQ++;
            showQuestion(currentQ);
        }
    };
    
    document.getElementById("restartBtn").onclick = function() {
        currentQ = 1;
        for (let i = 1; i <= 15; i++) {
            let inp = document.getElementById("ans" + i);
            if (inp) {
                if (inp.tagName === "SELECT") inp.selectedIndex = 0;
                else inp.value = "";
            }
        }
        document.getElementById("scorePanel").style.display = "none";
        document.getElementById("quizArea").style.display = "block";
        document.getElementById("navButtons").style.display = "block";
        showQuestion(1);
    };
};
}
