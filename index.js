let movies = [
  {
    name: "falcon and the winter soldier",
    des: "An action-superhero movie ",
    image: "images/slider 2.PNG"
  },
  {
    name: "Loki",
    des: "An action-superhero movie ",
    image: "images/slider 1.PNG"
  },
  {
    name: "",
    des: "An action-superhero movie ",
    image: "images/slider 3.PNG"
  },
  {
    name: "Ray and the last dragon",
    des: "An action-superhero movie ",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    des: "An action-superhero movie ",
    image: "images/slider 5.PNG"
  }
];
const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0; //track the current slide
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //create DOM elements

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all the elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up an image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elememts classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);
