const form = document.querySelector('#registration');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');

form.addEventListener("submit", (e) => {
  e.preventDefault()

  console.log(`Vítej uživateli, ${firstName.value} ${lastName.value}!`)
});

firstName.addEventListener("input", (e) => {
  console.log(e.target.value)
})

lastName.addEventListener("change", (e) => {
  console.log(e.target.value)
})

