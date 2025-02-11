import "./styles.css";
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

renderBar.footer();

console.log("The server is running");
