import VanillaTilt from 'vanilla-tilt';

VanillaTilt.init(document.querySelectorAll(".logo"), {
  max: 25,
  speed: 400,
  glare: true,  
  "max-glare": 1,
  scale: 1.1,
});


//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".your-element"));