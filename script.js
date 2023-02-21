let result = document.querySelector(".output-field");
function count() {
  let amount = document.getElementById("amount").value;
  let glass = amount/200;
  let tablespoon = amount/20;
  let teaspoon = amount/8;

  result.innerHTML = `
  <h2 class="subtitle">${amount} грамів цукру =</h2>
  <ul>
    <li><img class="measure-item" src="./images/glass.png" alt="glass" />${glass} стаканів</li>
    <li><img class="measure-item" src="./images/tablespoon.png" alt="tablespoon" />${tablespoon} столових ложок</li>
    <li><img class="measure-item" src="./images/teaspoon.png" alt="teaspoon" />${teaspoon} чайних ложок</li>
  </ul>`;
}
