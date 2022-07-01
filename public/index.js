///// ---- Process from orignal URL to short one----- /////
// with DOM manipulation  get the different elements:
const form = document.getElementById("form");
const input = document.querySelector("input");
const linkWrapper = document.querySelector(".link-wrapper");
const errorDiv = document.querySelector(".error");
const shortenedLink = document.querySelector(".short-link");

const handleSubmit = async () => {
  let url = document.querySelector("input").value;

  const response = await fetch("http://localhost:3000/encode", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ url }),
  }).then((response) => response.json());

  if (response.type == "failure") {
    input.style.border = "2px dotted red";
    errorDiv.textContent = `${response.message}`;
  }
  if (response.type == "success") {
    linkWrapper.style.opacity = 1;
    linkWrapper.style.display = "flex";
    shortenedLink.textContent = response.message;
    shortenedLink.style.backgroundColor = "lightGreen";
  }
};

// Clear input field and error message
const clearFields = () => {
  let url = document.querySelector("input");
  url.value = "";
  url.addEventListener("focus", () => {
    errorDiv.textContent = "";
    shortenedLink.textContent = "";
  });
};

// add event listener on the form to trigger the submit and clear the fields:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
  clearFields();
});

///// ---- replicate to get the same process from short URL to original one----- /////
const formDecode = document.getElementById("formDecode");
const inputDecode = document.getElementById("idDecode");
const linkWrapperDecode = document.querySelector(".link-wrapperDecode");
const errorDivDecode = document.querySelector(".errorDecode");
const originalLink = document.querySelector(".original-url");

const handleSubmitDecode = async () => {
  let id = document.getElementById("idDecode").value;
  if (id.length > 10) {
    id = id.slice(-10);
  }

  const response = await fetch(`http://localhost:3000/decode/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "GET",
  }).then((response) => response.json());

  if (response.type == "failure") {
    inputDecode.style.border = "2px dotted red";
    errorDivDecode.textContent = `${response.message}`;
  }
  if (response.type == "success") {
    linkWrapperDecode.style.opacity = 1;
    linkWrapperDecode.style.display = "flex";
    originalLink.textContent = response.message;
    originalLink.style.backgroundColor = "lightGreen";
  }
};

// Clear input field and error message
const clearFieldsDecode = () => {
  let url = document.getElementById("idDecode");
  url.value = "";
  url.addEventListener("focus", () => {
    errorDivDecode.textContent = "";
    originalLink.textContent = "";
  });
};

// add event listener on the form to trigger the submit and clear the fields:
formDecode.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmitDecode();
  clearFieldsDecode();
});

// function to toggle the display of the decode element:
document.getElementById("decodeDiv").style.display = "none";
function toggleDecode() {
  var decodeDiv = document.getElementById("decodeDiv");
  if (decodeDiv.style.display === "none") {
    decodeDiv.style.display = "block";
  } else {
    decodeDiv.style.display = "none";
  }
}
