let currentq = 1;
function showQuestion(qNum) {
    for (let i = 1; i <= 15; i++) {
        let qDiv = document.getElementById("q" + i);
        if (qDiv) {
            qDiv.style.display = "none";
        }
    }
    let currentDiv = document.getElementById("q" + qNum);
    if (currentDiv) {
        currentDiv.style.display = "block";
    }

    if (qNum === 1) {
        document.getElementById("prevBtn").disabled = true;
    } else {
        document.getElementById("prevBtn").disabled = false;
    }

    if (qNum === 15) {
        document.getElementById("nextBtn").innerHTML = "SHOW SCORE";
    } else {
        document.getElementById("nextBtn").innerHTML = "NEXT";
    }
}
