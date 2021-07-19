const players = JSON.parse(localStorage.getItem("players"));

const t = location.href.indexOf("=") + 1;
const playerId = location.href.substring(t);
const player = players.filter((p) => p.id == playerId)[0];
console.log(player);
const playerInfo = document.querySelector(".player_info");

function displayPlayer({
  playerName,
  price,
  photo,
  description,
  isPlaying,
  from,
}) {
  const pImg = document.createElement("div");
  pImg.classList.add("player_img");

  const img = document.createElement("img");
  img.setAttribute("src", photo);

  pImg.appendChild(img);

  const pContent = document.createElement("div");
  pContent.classList.add("player_content");

  const pTitle = document.createElement("div");
  pTitle.classList.add("player_name");
  pTitle.innerText = playerName;

  const cardP = document.createElement("p");
  cardP.innerHTML = `Team : ${from} <br/> Price : ${price} <br/> Playing Status : ${
    isPlaying == true ? "Playing" : "On-bench"
  } <br/> Role : ${description}`;

  pContent.appendChild(pTitle);
  pContent.appendChild(cardP);

  playerInfo.appendChild(pImg);
  playerInfo.appendChild(pContent);
}

displayPlayer(player);
