// 1️⃣ Console Greeting
console.log("Welcome to Starbucks Dashboard!");

// 2️⃣ Sidebar Navigation: Active Class Toggle
const navItems = document.querySelectorAll("aside ul li");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// 3️⃣ Greeting Button Function
function greetUser() {
  alert("Hello, Jayshree! Welcome to your Starbucks-style Dashboard ☕");
}

// 4️⃣ Toggle Cards Visibility
function toggleCards() {
  const cards = document.querySelector(".cards");
  cards.style.display = cards.style.display === "none" ? "flex" : "none";
}


// script.js ke andar add karo
document.querySelectorAll('.menu-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert("Item added to cart! ☕");
  });
});


const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

showLogin.addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Simple validation + alert
  const email = loginForm.emailLogin.value.trim();
  const password = loginForm.passwordLogin.value.trim();

  if(email && password){
    alert(`Welcome back, ${email}!`);
    loginForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signupForm.nameSignup.value.trim();
  const email = signupForm.emailSignup.value.trim();
  const password = signupForm.passwordSignup.value.trim();

  if(name && email && password){
    alert(`Account created for ${name}! Please login now.`);
    signupForm.reset();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  } else {
    alert("Please fill in all fields.");
  }
});
