const validationRules = {
  name: /^[A-Za-zА-Яа-яІіЇїЄє]+ [A-Za-zА-ЯІіЇїЄє]\.[A-Za-zА-ЯІіЇїЄє]\.$/,
  faculty: /^[A-ZА-ЯІЇЄ]{2,4}$/,
  "phone-number": /^(\(\d{3}\))-\d{3}-\d{2}-\d{2}$/,
  address: /^м\. \d{6}$/,
  variant: /^\d{1,2}$/,
};

const isValid = (fieldId) => {
  const fieldValue = document.getElementById(fieldId).value;
  const fieldInput = document.getElementById(fieldId);
  const regex = validationRules[fieldId];

  if (regex.test(fieldValue)) {
    fieldInput.classList.remove("error");
    return true;
  } else {
    fieldInput.classList.add("error");
    return false;
  }
};

const validateForm = () => {
  const fields = ["name", "faculty", "phone-number", "address", "variant"];

  return fields.every(isValid);
};

document.addEventListener("input", function (event) {
  const target = event.target;
  if (target.tagName === "INPUT" && target.type === "text") {
    isValid(target.id);
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    displayTextInNewWindow();
  } else {
    alert("Будь ласка, заповніть форму правильно");
  }
});

const displayTextInNewWindow = () => {
  const name = document.getElementById("name").value;
  const variant = document.getElementById("variant").value;
  const faculty = document.getElementById("faculty").value;
  const phone = document.getElementById("phone-number").value;
  const address = document.getElementById("address").value;

  const displayText = `
          <style>
            .info_container {
              display: flex;
              justify-content: center;
            }
          </style>
          <div class="info_container"> 
            <div>
              <p><strong>ПІБ:</strong> ${name}</p>
              <p><strong>Група:</strong> ${variant}</p>
              <p><strong>Телефон:</strong> ${phone}</p>
              <p><strong>Факультет:</strong> ${faculty}</p>              
              <p><strong>Адреса:</strong> ${address}</p>              
            </div>
          </div>
        `;

  const newWindow = window.open("", "_blank");
  newWindow.document.write(displayText);
};

document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("tableBody");
  const colorSelect = document.getElementById("color-select");

  let counter = 1;
  for (let i = 1; i <= 6; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 6; j++) {
      const cell = document.createElement("td");

      // Обработчики событий для клетки с номером 7
      if (counter === 7) {
        cell.addEventListener("mouseover", function () {
          cell.style.backgroundColor = getRandomColor();
        });

        cell.addEventListener("click", function () {
          const selectedColor = colorSelect.value;
          cell.style.backgroundColor = selectedColor;
        });

        cell.addEventListener("dblclick", function () {
          const allCells = document.querySelectorAll(".even");

          for (const evenCell of allCells) {
            evenCell.style.backgroundColor = colorSelect.value;
          }
        });
      }

      // Добавление класса "even" для четных строк
      if (i % 2 === 0) {
        cell.classList.add("even");
      }

      cell.textContent = counter;
      row.appendChild(cell);
      counter++;
    }

    tableBody.appendChild(row);
  }
});

// Генератор случайного цвета
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
