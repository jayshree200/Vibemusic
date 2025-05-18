const buttons = document.querySelectorAll(".add-button");
const toast = document.getElementById("toast");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "Add Item") {
      // Change to Added state
      button.textContent = "Added ✅";
      button.style.backgroundColor = "#888";  // gray
      showToast("Your item added.");
    } else {
      // Change back to Add state
      button.textContent = "Add Item";
      button.style.backgroundColor = "#00754a";  // original green
      showToast("Your item removed.");
    }
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
