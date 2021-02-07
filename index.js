import data from "./data"

// Create HTML elements needed for each carousel image
const figure = document.createElement('figure');
const picture = document.createElement("picture");
const img = document.createElement("img");
const figcaption = document.createElement("figcaption");

// The element where newly created elements will be appended to
const div = document.querySelector("div");

// Append the elements to the DOM

// add figure to the div
div.append(figure);
// Add the picture tag inside of figure
figure.append(picture);
// Add the img inside the picture
picture.append(img);
// Add the figcaption inside the div
div.append(figcaption);

// use first image in data
const image = data[0];

// assign attributes to the elements
img.setAttribute("class", 'portfolio__img');
img.setAttribute("src", image.pic);
img.setAttribute("alt", image.alt);
// add the caption to figcaption
figcaption.innerHTML = image.caption;

export default script