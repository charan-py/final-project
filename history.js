const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount,speed) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  <p>Typing Speed : <span class="bold red">${speed}</span>WPM</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount,speed });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    // newRow.classList.add("card");

    newRow.innerHTML = `
    <div class="col">
    <div class="card h-100">
     <h5 class="card-title">${test.questionText}</h5>
      <div class="card-body">
        <p lass="card-text">You took: <span class="bold">${parseInt(test.timeTaken)}</span> seconds</p>
        <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
        <p>Typing Speed : <span class="bold red">${test.speed}</span> WPM </p>
      </div>
    </div>
  </div>
  `;


  histories.appendChild(newRow);
  });
}
