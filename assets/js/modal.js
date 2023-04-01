var emailInput = document.getElementById("email");
var textHere = document.getElementById("textHere");
var sign_button = document.getElementById("signBtn");
var preRegisterEl = document.getElementsByClassName("alreadyRegistered");
//local storage created in array to capture email addresses
var emailStore = [];

function renderSearch() {
  textHere.innerHTML = " ";
  for (var i = 0; i < emailStore.length; i++) {
    emailStore = emailStore[i];
  }
}

function init() {
  var valid_email = JSON.parse(localStorage.getItem("email_List"));
  if (valid_email !== null) {
    emailStore = valid_email;
    return;
  }
  storeEmail();
}

function storeEmail() {
  // Stringify and set key in localStorage to previoussea array
  localStorage.setItem("email_List", JSON.stringify(emailStore));
}

//detecting if a previously added email address in present and if present will not accept that email address and ask's for a new one.
var handleFormSubmit = function (event) {
  event.preventDefault();

  var emailName = emailInput.value.trim();
  if (!emailStore.includes(emailName)) {
    emailStore.push(emailName);
    preRegisterEl[0].textContent = "Thank you for signing up..!";
  } else if (emailName !== null) {
    preRegisterEl[0].textContent = `Sorry we are not able to register this email. Please try with the new one`;
  }
  storeEmail();
  emailInput.value = " ";
};

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  // Functions to open and close a modal
  //here to separte between modals

  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    var modal = $trigger.dataset.target;

    var $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    var $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
      emailInput.value = "";
      preRegisterEl[0].textContent = "";
    });
  });
});

sign_button.addEventListener("click", handleFormSubmit);
init();
