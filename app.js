const headingElement = document.querySelector("h1");
const btnElement = document.querySelector("#btn");
let isFriendsVisible = false;

btnElement.addEventListener("click", function() {
  if (!isFriendsVisible) {
    headingElement.innerHTML = "Friends";
    btnElement.innerHTML = "Remove";
    isFriendsVisible = true;
  } else {
    headingElement.innerHTML = "Remove Friends";
    btnElement.innerHTML = "Add Friends";
    isFriendsVisible = false;
  }
});
