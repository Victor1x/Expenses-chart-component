// // const data = await getData();
// let dataDay = [];
// async function getData() {
//   try {
//     const response = await fetch("data.json");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     dataDay = await response.json();

//   } catch (error) {
//     console.log(error.message);
//   }
// }
// const div_day = document.querySelectorAll(".div_day");
// const spans = document.querySelectorAll(".span__value");
// dataDay.forEach((day, index) => {

//   div_day[index].style.Height = day.amount * 2
// });

// getData();

let dataDay = [];

async function getData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    dataDay = await response.json();

    // Após carregar os dados, chamamos a função para atualizar a UI
    updateUI();
  } catch (error) {
    console.log(error.message);
  }
}

const div_day = document.querySelectorAll(".div_day");
const spans = document.querySelectorAll(".span__value");
const week_day = document.querySelectorAll(".week-day");

function updateUI() {
  dataDay.forEach((day, index) => {
    if (div_day[index]) {
      div_day[index].style.height = `${day.amount * 2}px`;
      ("px");
    }
    if (spans[index]) {
      spans[index].textContent = `$${day.amount.toFixed(2)}`; // Exibe o valor no span correspondente
    }
  });

  week_day.forEach((li, index) => {
    li.addEventListener("mouseenter", () => {
      spans[index].style.display = "block";
    });
    li.addEventListener("mouseleave", () => {
      spans[index].style.display = "none";
    });
  });
}

// Chamamos a função para buscar os dados e atualizar a UI
getData();
