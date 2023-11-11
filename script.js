let counter = 0;

function changeColorGetElementById(elementId) {
  const element = document.getElementById(elementId);
  const currentColor = element.style.backgroundColor;

  if (currentColor === "grey") {
    element.style.backgroundColor = "blue";
    element.style.color = "white";
  } else {
    element.style.backgroundColor = "grey";
    element.style.color = "black";
  }
}

function changeColorQuerySelector(elementSelector) {
  const element = document.querySelector(elementSelector);
  const currentColor = element.style.backgroundColor;

  if (currentColor === "grey") {
    element.style.backgroundColor = "green";
    element.style.color = "darkblue";
  } else {
    element.style.backgroundColor = "grey";
    element.style.color = "black";
  }
}

function addImage() {
  counter++;

  const newImage = document.createElement("img");
  newImage.setAttribute("id", "lviv-img-" + counter);
  newImage.setAttribute(
    "src",
    "https://media.istockphoto.com/id/831414782/photo/lviv-city-ukraine-panorama-of-the-ancient-city.jpg?s=612x612&w=0&k=20&c=KOf4rwmoiGdL_rqypj3ER8r9z2nfBw_eRzs9HQQm1vw="
  );
  newImage.setAttribute("width", "600");
  newImage.style.display = "block";

  const photoContainer = document.querySelector(".my-city-photo");
  photoContainer.appendChild(newImage);
}

function deleteImage() {
  const existingImage =
    counter === 0
      ? document.getElementById("lviv-img")
      : document.getElementById(`lviv-img-${counter}`);
  console.log(existingImage);

  if (existingImage.id === "lviv-img") {
    existingImage.parentNode.removeChild(existingImage);
  } else if (existingImage) {
    const photoContainer = document.querySelector(".my-city-photo");
    photoContainer.removeChild(existingImage);
    counter--;
  }
}

function enlargeImage() {
  const existingImage =
    counter === 0
      ? document.getElementById("lviv-img")
      : document.getElementById(`lviv-img-${counter}`);

  const currentWidth = existingImage.width;
  existingImage.setAttribute("width", currentWidth + 100);
}

function reduceImage() {
  const existingImage =
    counter === 0
      ? document.getElementById("lviv-img")
      : document.getElementById(`lviv-img-${counter}`);

  const currentWidth = existingImage.width;
  if (currentWidth < 150) return;
  else existingImage.setAttribute("width", currentWidth - 100);
}
