// Base URL of your backend
const BASE_URL = "http://localhost:5000/api";

// Handle User Registration
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email }),
    });

    const data = await response.json();
    document.getElementById("register-response").textContent = data.message || data.error;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("register-response").textContent = "Registration failed.";
  }
});

// Handle Waste Deposit
const depositForm = document.getElementById("deposit-form");
depositForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const weight = document.getElementById("weight").value;
  const type = document.getElementById("type").value;

  try {
    const response = await fetch(`${BASE_URL}/waste`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 1, weight: parseFloat(weight), type }),
    });

    const data = await response.json();
    document.getElementById("deposit-response").textContent =
      data.message || data.error;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("deposit-response").textContent = "Deposit failed.";
  }
});

// Dummy Map Section
document.getElementById("map").textContent =
  "Map integration (e.g., Google Maps) goes here.";
