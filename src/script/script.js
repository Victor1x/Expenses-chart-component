let dataDay = [];

async function getData() {
  try {
    const response = await fetch("../../data.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    dataDay = await response.json();

    renderWeekDays(dataDay);
    // Após carregar os dados, chamamos a função para atualizar a UI
  } catch (error) {
    console.log(error.message);
  }
}

function updateUI(data) {
  const div_day = document.querySelectorAll(".div_day");
  const spans = document.querySelectorAll(".span__value");
  const week_day = document.querySelectorAll(".week-day");

  data.forEach((day, index) => {
    div_day[index].style.height = `${day.amount * 2}px`;
    ("px");

    spans[index].textContent = `$${day.amount.toFixed(2)}`; // Exibe o valor no span correspondente
  });

  week_day.forEach((li, index) => {
    li.addEventListener("mouseenter", () => {
    spans[index].classList.add("show");
    });
    li.addEventListener("mouseleave", () => {
    spans[index].classList.remove("show");
    });
  });
}

function renderWeekDays(data) {
  const container = document.querySelector(".weekly-expenses");

  data.forEach((item) => {
    const li = document.createElement("li");
    li.className = "week-day";

    const span = document.createElement("span");
    span.className = `span__value span__${item.day}`;
    span.textContent = `$${item.day}`;

    const div = document.createElement("div");
    div.className = `div_${item.day} div_day`;

    const p = document.createElement("p");
    p.className = "day";
    p.textContent = item.day;

    li.appendChild(span);
    li.appendChild(div);
    li.appendChild(p);
    container.appendChild(li);
  });

  updateUI(data);
}

// Chamamos a função para buscar os dados e atualizar a UI
getData();
