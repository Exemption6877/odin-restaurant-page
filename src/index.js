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

const resetPage = () => {
  const content = document.querySelector("#content");
  if (content.childElementCount > 0) {
    content.replaceChildren();
  }
};

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

  const about = () => {
    const about = document.createElement("div");
    about.classList.add("home");
    const heading = document.createElement("h1");
    heading.textContent = "About Us";
    const paragraph = document.createElement("p");
    paragraph.textContent = `Welcome to The Pizza Place, where passion meets flavor!
    We have been serving handcrafted, oven-fresh pizzas made from the finest ingredients for over a decade.
    From our crispy thin crusts to our rich, savory sauces, every bite is made with love.
    At The Pizza Place, we believe in more than just great food—we believe in creating unforgettable experiences. 
    Whether you are dining in with family, grabbing a quick slice,
    or ordering for a party, we promise quality, taste, and service that will keep you coming back.`;
    const address = document.createElement("h3");
    address.textContent =
      "📍 Location: 1234 Flavor Street, Pizza Town, PT 56789";
    const phone = document.createElement("h3");
    phone.textContent = "📞 Phone: (555) 123-4567";
    about.append(heading, paragraph, address, phone);
    content.appendChild(about);
  };

  return { main, about };
})();

const navButtons = document.querySelectorAll("button");

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.value == "about") {
      resetPage();
      renderPage.about();
    } else if (event.target.value == "home") {
      resetPage();
      renderPage.main();
    }
  });
});

renderPage.main();
renderBar.footer();

console.log("The server is running");
