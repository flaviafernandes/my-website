const properties = {
  zodiac: {
    ascendant: {
      sign: 4,      // Sets ascendant by sign. See src/zodiac.js.
      degree: 26    // Sets degree offset for ascendant sign.
    }
  },
  planets: {        // Sets degree of planets.
    sun: 6,
    mercury: 12,
    venus: 151.31,
    mars: 231,
    moon: 188,
    jupiter: 311,
    saturn: 100,
    uranus: 199,
    neptune: 278,
    pluto: 31
  },
  houses: {
    hasHouses: false,
    axes: {
      axis2to8: 27,   // Sets degree of axis.
      axis3to9: 56,
      axis4to10: 81,
      axis5to11: 114,
      axis6to12: 156
    }
  }
};
const h = new zastro.Horoscope(properties);
const drawn = h.draw("#horoscope");
console.log("Hurray! You have drawn your horoscope.", drawn);

const sundegree = document.getElementById("degree");
sundegree.addEventListener("change",function setsundegree(event){
  console.log(event.target.value);
})



