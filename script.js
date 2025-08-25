// =========================
// Part 1: Variables + Conditionals
// =========================
function checkAge() {
  let age = document.getElementById("age").value;
  let result = document.getElementById("age-result");

  if (age >= 18) {
    result.textContent = "✅ You are an adult.";
  } else {
    result.textContent = "❌ You are underage.";
  }
}

// =========================
// Part 2: Functions
// =========================
function calculateTotal(price, quantity) {
  // Function with parameters and return value
  let total = price * quantity;
  document.getElementById("total-result").textContent = 
    `Total cost is: $${total}`;
  return total;
}

function formatString(str) {
  // Function that modifies strings
  return str.toUpperCase();
}

// =========================
// Part 3: Loops
// =========================
function showCountdown() {
  let list = document.getElementById("countdown-list");
  list.innerHTML = ""; // clear previous

  // Countdown using for loop
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  // Example using while loop
  let arr = ["Apple", "Banana", "Cherry"];
  let j = 0;
  while (j < arr.length) {
    console.log("Fruit:", arr[j]);
    j++;
  }
}

// =========================
// Part 4: DOM Manipulation
// =========================
document.getElementById("toggle-btn").addEventListener("click", () => {
  let text = document.getElementById("toggle-text");
  text.classList.toggle("highlight");
});

// Create new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "📌 This paragraph was added with JavaScript!";
document.body.appendChild(newPara);
