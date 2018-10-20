const characters = [
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Boba Fett",
    height: "183",
    mass: "78.2",
    hair_color: "black",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "31.5BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "Palpatine",
    height: "170",
    mass: "75",
    hair_color: "grey",
    skin_color: "pale",
    eye_color: "yellow",
    birth_year: "82BBY",
    gender: "male"
  },
  {
    name: "Yoda",
    height: "66",
    mass: "17",
    hair_color: "white",
    skin_color: "green",
    eye_color: "brown",
    birth_year: "896BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  },
  {
    name: "Lando Calrissian",
    height: "177",
    mass: "79",
    hair_color: "black",
    skin_color: "dark",
    eye_color: "brown",
    birth_year: "31BBY",
    gender: "male"
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Darth Maul",
    height: "175",
    mass: "80",
    hair_color: "none",
    skin_color: "red",
    eye_color: "yellow",
    birth_year: "54BBY",
    gender: "male"
  },
  {
    name: "Mace Windu",
    height: "188",
    mass: "84",
    hair_color: "none",
    skin_color: "dark",
    eye_color: "brown",
    birth_year: "72BBY",
    gender: "male"
  },
  {
    name: "General Grievous",
    height: "216",
    mass: "159",
    hair_color: "none",
    skin_color: "brown, white",
    eye_color: "green, yellow",
    birth_year: "unknown",
    gender: "male"
  }
];

// var div = document.querySelector(".starwars");
// div.innerHTML += `<h1 id="person">${perso.person}</h1>`;

function findMatches(wordInput, characters) {
  return characters.filter(perso => {
    const regex = new RegExp(wordInput, "gi");
    return perso.name.match(regex) || perso.height.match(regex) || perso.birth_year.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, characters);
  const html = matchArray
    .map(perso => {
      const regex = new RegExp(this.value, "gi");
      const personName = perso.name.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
            <li>
                <span class="name">${personName}, Height: ${perso.height}cm</span>
                <span class="dob">D.O.B: ${perso.birth_year}</span>
            </li>
        `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

//Creating Stars for the background effect
//Number of stars
const numStars = 100;

//Loop through every numStars to display
for(var i = 0; i < numStars; i++){
    let star = document.createElement('div');
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}

function getRandomPosition(){
    var y = window.innerWidth;
    var x = window.outerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

function getHeight(star){

}