const t = location.href.indexOf("=") + 1;
const teamId = location.href.substring(t);

const team = JSON.parse(localStorage.getItem("teams")).filter(
  (ele) => ele.id == teamId
)[0];
console.log(team);
const p = JSON.parse(localStorage.getItem("players")).filter(
  (p) => p.from === team.key
);
const playerContainer = document.querySelector(".player-container");

function teamDetails(
  { teamIcon, fullName, key, championshipsWon },
  count,
  batsman,
  bowler
) {
  const leftDiv = document.querySelector(".left");

  const leftImg = document.createElement("div");
  leftImg.classList.add("left-img");

  const img = document.createElement("img");
  img.setAttribute("src", teamIcon);

  const leftContent = document.createElement("div");
  leftContent.classList.add("left_content");

  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = fullName + "(" + key + ")";

  const p = document.createElement("p");
  p.innerHTML = `Championship Won : ${championshipsWon} <br/> Player Count :${count} <br/> Top Batsman : ${batsman.playerName} <br/> Top Bowler : ${batsman.playerName}`;

  leftImg.appendChild(img);
  leftContent.appendChild(title);
  leftContent.appendChild(p);

  leftDiv.appendChild(leftImg);
  leftDiv.appendChild(leftContent);
}

function addPlayers({
  id,
  playerName,
  price,
  isPlaying,
  description,
  photo,
  from,
}) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.classList.add("player");
  cardDiv.setAttribute("player-id", id);
  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");

  const i = document.createElement("img");
  i.setAttribute("src", photo);
  i.setAttribute("alt", playerName + " img");

  cardImg.appendChild(i);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = playerName;

  cardContent.appendChild(cardTitle);

  const cardP = document.createElement("p");
  cardP.innerHTML = `Team : ${from} <br/> Price :${price} <br/> Playing Status : ${
    isPlaying == true ? "Playing" : "On-bench"
  } <br/> Role : ${description}`;

  cardContent.appendChild(cardP);
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardContent);

  playerContainer.appendChild(cardDiv);
}

p.forEach(addPlayers);

const card = document.querySelectorAll(".player");
card.forEach((c) => c.addEventListener("click", redirect));

function redirect(e) {
  let l = location.href.indexOf("/");
  // l.splice(22);
   const item = e.target;
  const id = item.parentElement.parentElement.getAttribute("player-id");
  // let l2 = l.join("") + "player_details.html" + "?playerId=" + id;
  let l2 =  location.href.substring(0,l) + "/player_details.html" + "?playerId=" + id;
  location.href = l2;
}

const batsmans = p
  .filter((t) => t.description == "Batsman" || t.description == "All-Rounder")
  .sort((fe, se) => fe.price < se.price);
console.log(p);
const bowlers = p
  .filter((t) => t.description == "Bowler" || t.description == "All-Rounder")
  .sort((fe, se) => fe.price < se.price);

teamDetails(team, p.length, batsmans[0], bowlers[0]);
