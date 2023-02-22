function countSugar(gram) {
  return {
    glass: gram / 200,
    tablespoon: gram / 20,
    teaspoon: gram / 8,
  };
}

function renderCount() {
  const initialAmount = document.getElementById("amount").value;
  const resultAmount = countSugar(initialAmount);
  document.querySelector(".output-field").innerHTML = `
  <h2 class="subtitle">${initialAmount} грамів цукру =</h2>
  <ul>
    <li><img class="measure-item" src="./images/glass.png" alt="glass" />${resultAmount.glass} стаканів</li>
    <li><img class="measure-item" src="./images/tablespoon.png" alt="tablespoon" />${resultAmount.tablespoon} столових ложок</li>
    <li><img class="measure-item" src="./images/teaspoon.png" alt="teaspoon" />${resultAmount.teaspoon} чайних ложок</li>
  </ul>`;
}
