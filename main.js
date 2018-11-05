const characters = [
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    id: "one"
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    id: "two"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    id: "three"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    id: "four"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    id: "five"
  },
  {
    name: "Boba Fett",
    height: "183",
    mass: "78.2",
    hair_color: "black",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "31.5BBY",
    gender: "male",
    id: "six"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
    id: "seven"
  },
  {
    name: "Palpatine",
    height: "170",
    mass: "75",
    hair_color: "grey",
    skin_color: "pale",
    eye_color: "yellow",
    birth_year: "82BBY",
    gender: "male",
    id: "eight"
  },
  {
    name: "Yoda",
    height: "66",
    mass: "17",
    hair_color: "white",
    skin_color: "green",
    eye_color: "brown",
    birth_year: "896BBY",
    gender: "male",
    id: "nine"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
    id: "ten"
  },
  {
    name: "Lando Calrissian",
    height: "177",
    mass: "79",
    hair_color: "black",
    skin_color: "dark",
    eye_color: "brown",
    birth_year: "31BBY",
    gender: "male",
    id: "eleven"
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "41.9BBY",
    gender: "male",
    id: "twelve"
  },
  {
    name: "Darth Maul",
    height: "175",
    mass: "80",
    hair_color: "none",
    skin_color: "red",
    eye_color: "yellow",
    birth_year: "54BBY",
    gender: "male",
    id: "thirteen"
  },
  {
    name: "Mace Windu",
    height: "188",
    mass: "84",
    hair_color: "none",
    skin_color: "dark",
    eye_color: "brown",
    birth_year: "72BBY",
    gender: "male",
    id: "fourteen"
  },
  {
    name: "General Grievous",
    height: "216",
    mass: "159",
    hair_color: "none",
    skin_color: "brown, white",
    eye_color: "green, yellow",
    birth_year: "unknown",
    gender: "male",
    id: "fifteen"
  }
];



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
            <li id="${perso.id}" onclick="${perso.id}();">
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
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

var newView = document.querySelector(".starwars");
var once = true;
function two(){

  newView.innerHTML += `
  <div class="jedi">
  <div class="image-wrapper">
      <img id="swImage"src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&amp;width=768"
          class="thumb reserved-ratio" alt="Luke Skywalker">
  </div>
  <div class="desc-sizer">
      <p class="desc">Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy
          has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the
          truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi
          master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi
          had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would
          be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.</p>
  </div>
</div>
  `;
  searchInput.value = 'Luke Skywalker';
  searchInput.addEventListener("focus", displayMatches);
  searchInput.focus();
  }