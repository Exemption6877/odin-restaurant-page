import "./styles.css";
import interiorImage from "./images/interior.jpg";
// Used images
//  https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA

const renderBar = (function () {
  const body = document.querySelector("body");
  const footer = () => {
    const footerContainer = document.createElement("footer");
    const date = document.createElement("p");
    date.innerHTML = `Copyright © ${new Date().getFullYear()}`;
    footerContainer.appendChild(date);
    body.appendChild(footerContainer);
  };

  return { footer };
})();

const renderPage = (function () {
  const content = document.querySelector("#content");
  const main = () => {
    const home = document.createElement("div");
    home.classList.add("home");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To The Pizza Place!";
    const image = document.createElement("img");
    image.src = interiorImage;
    image.alt = "Interior picture";
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `We serve freshly made, handcrafted pizzas with the finest ingredients
          and bold flavors. Whether you're craving a classic Margherita or a
          loaded meat lovers' special, we've got something for everyone. Order
          now and experience the perfect slice of happiness!`;
    home.append(heading, image, paragraph);
    content.appendChild(home);
  };
  return { main };
})();

renderPage.main();
renderBar.footer();

console.log("The server is running");
