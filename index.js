const homePageContainer = document.getElementById("homepage");
const postPageContainer = document.getElementById("post-page");
const aboutUsContainer = document.getElementById("about-us");
const link = document.querySelector("a");

document.addEventListener("click", function (e) {
  // e.preventDefault();

  if (e.target.id === "postLink") {
    homePageContainer.classList.add("hide");
    aboutUsContainer.classList.add("hide");
    postPageContainer.classList.remove("hide");
  }

  if (e.target.id === "aboutLink") {
    homePageContainer.classList.add("hide");
    aboutUsContainer.classList.remove("hide");
    postPageContainer.classList.add("hide");
  }

  if (e.target.id === "home") {
    homePageContainer.classList.remove("hide");
    aboutUsContainer.classList.add("hide");
    postPageContainer.classList.add("hide");
  }
});
