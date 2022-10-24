// Change the font color of the paragraph to light blue.
let paragraph = document.querySelector("p");
paragraph.style.color = "lightblue";

// Change the font size of the heading to 48px.
let header = document.querySelector("h1");
header.style.fontSize = "48px";

// Change the text of the paragraph to be the following Hipster Ipsum:
paragraph.innerText = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress."

// Change the 13th item to be half transparent. (Look this up!)
let item13 = document.querySelector("#item-13");
item13.style.opacity = "50%";

// Change the 3rd item's text to say:    I say, "Hi!"
let item3 = document.querySelector("#item-3");
item3.innerText = "I say, 'Hi!'";

// Change the image below the list to be whatever image you want.
let img = document.querySelector("img");
img.src = "https://www.publicdomainpictures.net/pictures/160000/nahled/maine-coon-cat.jpg";

// Change that image's size to be 300 pixels high.
img.style.height = "300px";

// Using HTML, add a new image of your choice below or to the right of the other image and give it a unique id.
let uniqueImgID = document.querySelector("#unique-img-id");

// Now make that image 300 pixels high (with JS)
uniqueImgID.style.height = "300px";

// Using HTML, add a 16th <li> to the list. Once again with HTML, give it an ID that follows the others' numbering scheme.
// Now, (with JS) give it the same class as the others.
let item16 = document.querySelector("#item-16");
item16.className = "class";

// Give that <li> the following text:
item16.innerText = "Won't get fooled again."