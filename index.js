const teams = [
  {
    id: 1,
    fullName: "Chennai Super Kings",
    key: "CSK",
    championshipsWon: 3,
    teamIcon:
      "https://whiteandblack.in/wp-content/uploads/2021/04/Chennai-Super-Kings-logo-design-IPL-300x300.jpg",
  },
  {
    id: 2,
    fullName: "Royal Challengers Banglore",
    key: "RCB",
    championshipsWon: 0,
    teamIcon:
      "https://whiteandblack.in/wp-content/uploads/2021/04/RCB-logo-design-IPL-300x300.jpg",
  },
  {
    id: 3,
    fullName: "Mumbai Indians",
    key: "MI",
    championshipsWon: 3,
    teamIcon:
      "https://whiteandblack.in/wp-content/uploads/2021/04/Mumbai-Indians-logo-design-IPL-300x300.jpg",
  },
  // {
  //   id: 4,
  //   fullName: "Rajasthan Royals",
  //   key: "RR",
  //   championshipsWon: 3,
  //   teamIcon:
  //     "https://whiteandblack.in/wp-content/uploads/2021/04/Rajasthan-Royals-logo-design-IPL-300x300.jpg",
  // },
  // {
  //   id: 5,
  //   fullName: "Kolkata Knight Riders",
  //   key: "KKR",
  //   championshipsWon: 3,
  //   teamIcon:
  //     "https://whiteandblack.in/wp-content/uploads/2021/04/KKR-logo-design-IPL-300x300.jpg",
  // },
  // {
  //   id: 6,
  //   fullName: "Sunrisers Hyderabad",
  //   key: "SRH",
  //   championshipsWon: 3,
  //   teamIcon:
  //     "https://whiteandblack.in/wp-content/uploads/2021/04/SunRisers-Hyderabad-logo-design-IPL-300x300.jpg",
  // },
  // {
  //   id: 7,
  //   fullName: "Punjab Kings",
  //   key: "KIXP",
  //   championshipsWon: 3,
  //   teamIcon:
  //     "https://whiteandblack.in/wp-content/uploads/2021/04/Punjab-Kings-logo-design-IPL-300x300.jpg",
  // },
  {
    id: 8,
    fullName: "Delhi Capitals",
    key: "DC",
    championshipsWon: 3,
    teamIcon:
      "https://whiteandblack.in/wp-content/uploads/2021/04/Delhi-Capitals-logo-design-IPL-300x300.jpg",
  },
];
const players = [
  {
    id: 0,
    playerName: "MS DHONI",
    from: "CSK",
    price: "15.00 cr",
    isPlaying: true,
    description: "All-rounder",
    photo:
      "https://media.gettyimages.com/photos/dhoni-of-india-poses-during-the-india-2015-icc-cricket-world-cup-at-picture-id463104414?s=612x612",
  },
  {
    id: 1,
    playerName: "Hardik pandya",
    from: "MI",
    price: "9.00 cr",
    isPlaying: true,
    description: "All-rounder",
    photo:
      "https://images.news18.com/ibnlive/uploads/2021/04/1618223282_hardik-pandya-a.jpg",
  },
  {
    id: 2,
    playerName: "Virat Kohli",
    from: "RCB",
    price: "14.00 cr",
    isPlaying: true,
    description: "All-rounder",
    photo:
      "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
  },

  {
    id: 3,
    playerName: "Suresh Raina",
    from: "CSK",
    price: "12.00 cr",
    isPlaying: true,
    description: "All-rounder",
    photo:
      "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316500/316523.png",
  },
  {
    id: 4,
    playerName: "Sam Curran",
    from: "CSK",
    price: "13.00 cr",
    isPlaying: true,
    description: "All-rounder",
    photo:
      "https://static.toiimg.com/thumb/msid-81844073,width-1200,height-900,resizemode-4/.jpg",
  },
  {
    id: 5,
    playerName: "Ravindra Jadeja",
    from: " CSK ",
    price: "14.00 cr",
    isPlaying: true,
    description: "All-rounder",
    photo:
      "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316600/316600.png",
  },

  {
    id: 6,
    playerName: "Faf DU Plessis",
    from: "CSK",
    price: "9.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo: "https://p.imgci.com/db/PICTURES/CMS/321000/321097.jpg",
  },
  {
    id: 7,
    playerName: "Moeen Ali",
    from: "CSK",
    price: "9.00 cr",
    isPlaying: true,
    description: "All-rounder",
    photo:
      "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316500/316557.png",
  },
  {
    id: 8,
    playerName: "Ruturaj Gaikwad",
    from: "CSK",
    price: "4.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo:
      "https://www.insidesport.co/wp-content/uploads/2020/09/Ruturaj-Gaikwad.jpg",
  },
  {
    id: 9,
    playerName: "Jason Behrendorff",
    from: "CSK",
    price: "11.00 cr",
    isPlaying: true,
    description: " bowler",
    photo:
      "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/321500/321589.png",
  },
  {
    id: 10,
    playerName: "Deepak Chahar",
    from: " CSK ",
    price: "7.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/322700/322704.png",
  },
  {
    id: 11,
    playerName: "Dwayne Bravo",
    from: " CSK ",
    price: "13.00 cr",
    isPlaying: true,
    description: "All-rounder",
    photo:
      "https://m.cricbuzz.com/a/img/v1/192x192/i1/c171033/dwayne-bravo.jpg",
  },
  {
    id: 12,
    playerName: "Ambati Rayudu",
    from: " CSK ",
    price: "4.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo:
      "https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316400/316499.png",
  },

  {
    id: 13,
    playerName: "Rahul chahar",
    from: "MI",
    price: "13.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      "https://pbs.twimg.com/profile_images/1370655793406603264/3q2IKF5p_400x400.jpg",
  },
  {
    id: 14,
    playerName: "James Pattinson",
    from: "MI",
    price: "12.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      "https://www.cricket.com.au/-/media/Players/Men/International/Australia/Test%201920/James-Pattinson-1920.ashx",
  },
  {
    id: 15,
    playerName: "Trent Boult",
    from: " MI ",
    price: "11.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      "https://theqna.org/wp-content/uploads/2020/07/trentboult-300x210.jpg",
  },
  {
    id: 16,
    playerName: "Aditya Tare",
    from: " MI ",
    price: "10.00 cr",
    isPlaying: true,
    description: "Wicket-keeper",
    photo:
      "https://www.mumbaiindians.com/static-assets/images/players/small/5435.png",
  },
  {
    id: 17,
    playerName: "Anukul Roy",
    from: " MI ",
    price: "10.00 cr",
    isPlaying: true,
    description: "All-Rounder",
    photo: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c153915/anukul-roy.jpg",
  },
  {
    id: 18,
    playerName: "Ishan Kishan",
    from: "MI",
    price: "9.00 cr",
    isPlaying: true,
    description: "Wicket-Keeper",
    photo:
      "https://assets.thehansindia.com/h-upload/2020/09/28/1600x960_1002021-ishan-kishan.jpg ",
  },
  {
    id: 19,
    playerName: "Suryakumar Yadav",
    from: "MI",
    price: "11.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo:
      "https://www.mumbaiindians.com/static-assets/images/players/large/11803.png?v=1.34&w=400",
  },
  {
    id: 20,
    playerName: "Rohit Sharma",
    from: "MI",
    price: "15.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo: "https://static.iplt20.com/players/210/107.png",
  },
  {
    id: 21,
    playerName: "Piyush Chawla",
    from: "MI",
    price: "11.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      "https://www.mumbaiindians.com/static-assets/images/players/small/3729.png",
  },
  {
    id: 22,
    playerName: "Krunal Pandya",
    from: "MI",
    price: "13.00 cr",
    isPlaying: true,
    description: "All-Rounder",
    photo:
      "https://www.mumbaiindians.com/static-assets/images/players/small/63788.png",
  },
  {
    id: 23,
    playerName: "Navdeep Saini",
    from: "RCB",
    price: "11.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      "https://moneyball.insidesport.co/img/singleplayer/NavdeepSaini1.jpg ",
  },
  {
    id: 24,
    playerName: "Finn Allen",
    from: "RCB",
    price: "12.00 cr",
    isPlaying: true,
    description: "Wicket-Keeper",
    photo: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c154585/finn-allen.jpg ",
  },
  {
    id: 25,
    playerName: "Pavan Deshpande",
    from: "RCB",
    price: "12.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo:
      "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2020-08/P%20Deshpande.jpg?h=920929c4&itok=F5dWBFfC ",
  },

  {
    id: 26,
    playerName: "Glenn Maxwell",
    from: "RCB",
    price: "10.00 cr",
    isPlaying: true,
    description: "ALL-Rounder",
    photo: " https://www.espncricinfo.com/db/PICTURES/CMS/316600/316657.png ",
  },

  {
    id: 27,
    playerName: "Dan Christian",
    from: "RCB",
    price: "7.00 cr",
    isPlaying: true,
    description: "All-Rounder",
    photo: "https://www.espncricinfo.com/db/PICTURES/CMS/321500/321572.png ",
  },

  {
    id: 28,
    playerName: "AB de Villiers",
    from: "RCB",
    price: "14.00 cr",
    isPlaying: true,
    description: "Wicket-Keeper",
    photo:
      " https://resources.platform.iplt20.com/IPL/photo/2018/05/17/c216a19f-5df0-4406-8128-d383a62f8660/AB.jpg ",
  },

  {
    id: 29,
    playerName: "Adam Zampa",
    from: "RCB",
    price: "12.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo: "https://static.iplt20.com/players/210/958.png ",
  },

  {
    id: 30,
    playerName: "Aaron Finch",
    from: "RCB",
    price: "121.00 cr",
    isPlaying: true,
    description: "Batsman ",
    photo:
      "https://staticg.sportskeeda.com/editor/2021/01/9f71a-16112929936221-800.jpg ",
  },

  {
    id: 31,
    playerName: "Shrikar Bharat",
    from: "RCB",
    price: "9.00 cr",
    isPlaying: true,
    description: "Wicket-Keeper",
    photo:
      "https://moneyball.insidesport.co/img/singleplayer/SrikarBharat1.jpg ",
  },

  {
    id: 32,
    playerName: "Yuzvendra chahal",
    from: "RCB",
    price: "10.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo: " https://static.iplt20.com/players/210/111.png ",
  },

  {
    id: 33,
    playerName: "Ishant Sharma",
    from: "DC",
    price: "12.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      " https://cdn.insidesport.co/wp-content/uploads/2021/01/11190634/ishant-sharma.jpg ",
  },

  {
    id: 34,
    playerName: "Anrich Nortje",
    from: "DC",
    price: "1.80 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      " https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/08/image-2020-08-31t212403-1598889268.jpg ",
  },
  {
    id: 35,
    playerName: "M Siddharth",
    from: "DC",
    price: "12.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      " https://spiderimg.amarujala.com/assets/images/2021/02/01/m-siddharth_1612155616.jpeg ",
  },
  {
    id: 36,
    playerName: "Tom Curran",
    from: "DC",
    price: "14.00 cr",
    isPlaying: true,
    description: "Bowler",
    photo:
      " https://cdn.insidesport.co/wp-content/uploads/2021/04/07163017/tom-Curran.jpg ",
  },
  {
    id: 37,
    playerName: "Ajinkya Rahane",
    from: "DC",
    price: "14.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo:
      " https://i.pinimg.com/originals/13/1f/9e/131f9ecf11d4489b6e2e81b5ed84a0af.png ",
  },
  {
    id: 38,
    playerName: "Marcus Stoinis",
    from: "DC",
    price: "10.00 cr",
    isPlaying: true,
    description: "All-Rounder",
    photo: "https://static.iplt20.com/players/210/964.png ",
  },
  {
    id: 39,
    playerName: "Avesh Khan",
    from: "DC",
    price: "12.00 cr",
    isPlaying: true,
    description: "bowler",
    photo: " https://static.iplt20.com/players/210/1561.png",
  },
  {
    id: 40,
    playerName: "Prithvi Shaw",
    from: "DC",
    price: "11.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo: " https://static.iplt20.com/players/210/3764.png ",
  },
  {
    id: 41,
    playerName: "Ravichandra Ashwin",
    from: "DC",
    price: "9.00 cr",
    isPlaying: true,
    description: "All-Rounder",
    photo:
      " https://static.toiimg.com/thumb/msid-56116826,width-1200,height-900,resizemode-4/.jpg",
  },
  {
    id: 42,
    playerName: "Sam Billings",
    from: "DC",
    price: "13.00 cr",
    isPlaying: true,
    description: "Wicket-keeper",
    photo: " https://static.iplt20.com/players/210/2756.png ",
  },
  {
    id: 43,
    playerName: "Shikhar Dhawan",
    from: "DC",
    price: "14.00 cr",
    isPlaying: true,
    description: "Batsman",
    photo:
      " https://moneyball.insidesport.co/img/singleplayer/Shikhar-Dhawan1.jpg ",
  },
];

localStorage.setItem("teams", JSON.stringify(teams));
localStorage.setItem("players", JSON.stringify(players));

const cardContainer = document.querySelector(".card-container");
JSON.parse(localStorage.getItem("teams")).forEach(addCards);

function addCards({ id, fullName, teamIcon }) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.setAttribute("team-id", id);
  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");

  const i = document.createElement("img");
  i.setAttribute("src", teamIcon);
  i.setAttribute("alt", fullName + " logo");

  cardImg.appendChild(i);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = fullName;

  cardContent.appendChild(cardTitle);

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardContent);

  cardDiv.addEventListener("click", redirect);
  cardContainer.appendChild(cardDiv);
}

const search = document.querySelector("input");
search.addEventListener("keyup", filterTeams);

function filterTeams(e) {
  const newTeams = teams.filter((t) =>
    t.fullName.toLowerCase().includes(e.target.value)
  );
  if (newTeams.length >= 1) {
    console.log(newTeams);
    cardContainer.innerHTML = "";
    newTeams.forEach(addCards);
  }
}

function redirect(e) {
  // let l = location.href.split("");
  // l.splice(22);
  const item = e.target;
  const id = item.parentElement.parentElement.getAttribute("team-id");
  // let l2 = l.join("") + "team_details.html" + "?teamId=" + id;
  let l2 = location.href + "/team_details.html" +"?teamId=" + id;
  location.href = l2;
}
