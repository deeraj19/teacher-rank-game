const correctOrder = [
  "Radha Miss",     // LKG
  "Bharati Miss",   // UKG
  "Suma Miss",      // 1st
  "Rama Miss",      // 2nd
  "Chaitra Miss",   // 3rd
  "Mamata Miss",    // 4th
  "Saraswati Miss", // 5th
  "Chaitra Miss",   // 6th
  "Jaya Miss",      // 7th
  "Namata Miss",    // 8th
  "Namata Miss",    // 9th
  "Namata Miss"     // 10th
];

let currentIndex = 0;
let playerName = "";
let correctCount = 0;

function startGame() {
  const name = document.getElementById("player-name").value.trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  playerName = name;
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";

  const buttonContainer = document.getElementById("teacher-buttons");
  buttonContainer.innerHTML = ""; // Clear if previously added

  const shuffledNames = shuffleArray([...correctOrder]);
  shuffledNames.forEach((teacher) => {
    const btn = document.createElement("button");
    btn.innerText = teacher;
    btn.onclick = () => checkAnswer(teacher, btn);
    buttonContainer.appendChild(btn);
  });
}

function checkAnswer(selected, buttonEl) {
  const expected = correctOrder[currentIndex];
  if (selected === expected) {
    buttonEl.style.backgroundColor = "#00ff88";
    buttonEl.disabled = true;
    currentIndex++;
    correctCount++;
    if (currentIndex === correctOrder.length) {
      endGame(true);
    }
  } else {
    buttonEl.style.backgroundColor = "#ff3333";
    endGame(false);
  }
}

function endGame(won) {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  const msg = won
    ? `🎉 Congrats ${playerName}! You selected all correctly!`
    : `❌ Game Over, ${playerName}! You got ${correctCount} correct.`;

  document.getElementById("result-msg").innerText = msg;

  saveResult(playerName, correctCount);
}

// Save one result per user
function saveResult(name, score) {
  const stored = localStorage.getItem("results");
  let results = stored ? JSON.parse(stored) : {};

  if (!results[name]) {
    results[name] = score;
    localStorage.setItem("results", JSON.stringify(results));
  }
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// ---- Show Results Page ----
function verifyPassword() {
  const pass = prompt("Enter password to view results:");
  if (pass === "mrdeer09") {
    showResults();
  } else {
    alert("Wrong password!");
  }
}

function showResults() {
  const resultDiv = document.getElementById("results-data");
  const stored = localStorage.getItem("results");
  if (!stored) {
    resultDiv.innerText = "No results yet.";
    return;
  }

  const results = JSON.parse(stored);
  const entries = Object.entries(results)
    .map(([name, score]) => `${name}: ${score} correct`)
    .join("\n");

  resultDiv.innerText = entries;
}
