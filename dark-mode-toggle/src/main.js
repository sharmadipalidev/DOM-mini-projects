const btn = document.getElementById("toggleButton");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "Toggle to Light Mode";
  } else {
    btn.textContent = "Toggle to Dark Mode";
  }
});
