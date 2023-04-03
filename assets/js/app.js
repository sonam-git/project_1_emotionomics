// //variable
let APIKEY = "2llCfwgKW4oQEdJcS9y7VtaoHJFYb8pG";
let outEl = document.getElementById("out");
let selectEl = document.getElementById("coins-dropdown");
let coinEl = document.getElementById("coin-change");
let headEl = document.getElementById("heading-1");

// Api call for the coin information
var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34a30b9c25mshcf53a973bb4ac8cp1302c3jsn02d818ce1d62",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

fetch(
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0",
  options
)
  .then((response) => {
    return response.json();
  })
  .then((objectData) => {
    // console.log(objectData.data.coins);
    getData(objectData.data.coins);
  });

// Display the list of coins as an option within select element
function getData(arrayList) {
  for (let i = 0; i < arrayList.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", arrayList[i].change);
    option.setAttribute("id", arrayList[i].id);
    // function to sort the coin name alphabetically
    arrayList.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    let optionText = document.createTextNode(arrayList[i].name);
    option.appendChild(optionText);
    selectEl.appendChild(option);
  }
}

// Get the user click input and display the text and button to show giphy
if (selectEl) {
  function selectCoin(event) {
    console.log("option selected");
    event.preventDefault();
    let coinChange = event.target.value;
    coinEl.setAttribute("class", "box");
    outEl.innerHTML = " ";

    console.log(coinChange);

    if (coinChange > 1) {
      coinEl.innerHTML = ` <h2>Your coin change is <span  class="tag is-success">${coinChange}</span> % now. Get Your Giphy</h2>`;
      console.log(" change is +");
      happyButton();
      // hide the div when user interacts
      headEl.setAttribute("class", "hide-div");
    } else {
      coinEl.innerHTML = `<h2>Your coin change is  <span class="tag is-danger"> ${coinChange}</span> % now. Get Your Giphy</h2>`;
      console.log("Change is - ");
      sadButton();
      // hide the div when user interacts
      headEl.setAttribute("class", "hide-div");
    }
    saveData();
  }
}

// function to save user data
function saveData() {
  // get data from select option
  var new_data = " " + document.getElementById("coins-dropdown").value;
  // if there is nothing saved at the start then save an empty array
  if (localStorage.getItem("Price_change") == null) {
    localStorage.setItem("Price_change", "[]");
  }
  // get old data and push it to the new data
  var old_data = JSON.parse(localStorage.getItem("Price_change"));
  old_data.push(new_data);
  // save the old and new data to local storage
  localStorage.setItem("Price_change", JSON.stringify(old_data));
}
// function to view data
function viewData() {
  if (localStorage.getItem("Price_change") !== null) {
    document.getElementById("coin-change").innerHTML =
      ` <h2>Your Saved Coin Change % History From The Local Storage : </h2> ` +
      JSON.parse(localStorage.getItem("Price_change"));
    coinEl.setAttribute("class", "box");
    headEl.setAttribute("class", "hide-div");
  }
}
// function to clear all stored user data in the local s
function clearData() {
  localStorage.clear();
  coinEl.innerHTML = " ";
  coinEl.setAttribute("class", "hide-div");
}
// math function to display random giphy image
function createRandomNumber(max) {
  let num = Math.random() * max;
  num = Math.floor(num);
  return num;
}
// button function to display happy giphy
function happyButton() {
  let buttonEl = document.createElement("BUTTON");
  buttonEl.className = "button is-success is-outlined";
  let text = document.createTextNode("Get your Giphy..");
  buttonEl.appendChild(text);
  coinEl.appendChild(buttonEl);
  buttonEl.addEventListener("click", (event) => {
    event.preventDefault();
    // api call for the happy giphy
    const offset = createRandomNumber(12);
    console.log(offset);
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=happy&offset=${offset}`;
    // added "offset" parameter to display random giphy
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data[0]);
        let imgEl = document.createElement("img");
        imgEl.setAttribute("class", "giphy-image");
        let figEl = document.createElement("figure");
        let fcEl = document.createElement("figcaption");
        fcEl.setAttribute("class", "figcaption");
        imgEl.src = content.data[0].images.downsized.url;
        imgEl.alt = content.data[0].title;
        fcEl.textContent = content.data[0].title;
        figEl.appendChild(imgEl);
        figEl.appendChild(fcEl);
        outEl.appendChild(figEl);
      });
    outEl.textContent = " ";
    coinEl.textContent = " ";
    coinEl.setAttribute("class", "hide-div");
  });
}

// button function to display sad giphy
function sadButton() {
  let buttonEl = document.createElement("BUTTON");
  buttonEl.className = "button is-danger is-outlined";
  let text = document.createTextNode("Get your Giphy..");
  buttonEl.appendChild(text);
  coinEl.appendChild(buttonEl);
  buttonEl.addEventListener("click", (event) => {
    event.preventDefault();
    // api call for the sad giphy
    const offset = createRandomNumber(12);
    console.log(offset);
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=sad&offset=${offset}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        let imgEl = document.createElement("img");
        imgEl.setAttribute("class", "giphy-image");
        let figEl = document.createElement("figure");
        let fcEl = document.createElement("figcaption");
        fcEl.setAttribute("class", "figcaption");
        imgEl.src = content.data[0].images.downsized.url;
        imgEl.alt = content.data[0].title;
        fcEl.textContent = content.data[0].title;
        figEl.appendChild(imgEl);
        figEl.appendChild(fcEl);
        outEl.appendChild(figEl);
      });
    outEl.textContent = " ";
    coinEl.textContent = " ";
    coinEl.setAttribute("class", "hide-div");
  });
}

// function to close the display
function clearGiphy() {
  outEl.innerHTML = " ";
  coinEl.textContent = " ";
  coinEl.setAttribute("class", "hide-div");
  // option.textContent = " ";
  //selectEl.value = " ";
  document.getElementById("coins-dropdown").selectedIndex = 0;
  // render back headEl when click close button
  headEl.setAttribute("class", "instruction");
}
// choose the coin event listener
selectEl.addEventListener("change", selectCoin);