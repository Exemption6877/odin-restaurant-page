import "./styles.css";

const renderDOM = (function () {
  const body = document.querySelector("body");
  const footer = () => {
    const footerContainer = document.createElement("footer");
    const date = document.createElement("p");
    date.innerHTML = `Copyright ${new Date().getFullYear()}`;
    footerContainer.appendChild(date);
    body.appendChild(footerContainer);
  };

  return { footer };
})();


renderDOM.footer();

console.log("The server is running");
