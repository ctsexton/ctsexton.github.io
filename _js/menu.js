export function menu() {
  function openMenu() {
    document.getElementById("nav")
      .classList.toggle("open")
  }
  document.getElementById("menuButton")
    .addEventListener("click", openMenu)
}
