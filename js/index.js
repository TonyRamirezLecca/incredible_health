function parallax() {
  if (windowWidth > 900) {
    var windowHeight = window.innerHeight;
    var pagePosition = window.pageYOffset + windowHeight;

    var img1Position = 0;

    var img2ContainerPosition = document.querySelector(".hempSection")
      .offsetTop;
    var img2Position =
      document.querySelector("#parallaxImg2").offsetTop + img2ContainerPosition;

    var img3ContainerPosition = document.querySelector(".textImageSection")
      .offsetTop;
    var img3Position =
      document.querySelector("#parallaxImg3").offsetTop + img3ContainerPosition;

    if (pagePosition - windowHeight <= windowHeight) {
      document.querySelector(
        "#parallaxImg1"
      ).style.transform = `translateY(${(pagePosition - windowHeight) / 40}%)`;
    }
    if (pagePosition > img2Position) {
      document.querySelector(
        "#parallaxImg2"
      ).style.transform = `translateY(${(pagePosition - img2Position) / 50}%)`;
    }
    if (pagePosition > img3Position) {
      document.querySelector(
        "#parallaxImg3"
      ).style.transform = `translateY(${(pagePosition - img3Position) / 50}%)`;
    }
  } else {
    document.querySelector("#parallaxImg1").style.transform = ``;
    document.querySelector("#parallaxImg2").style.transform = ``;
    document.querySelector("#parallaxImg3").style.transform = ``;
  }
}

parallax();

var windowWidth = window.innerWidth;
window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
});

document.addEventListener("scroll", () => {
  parallax();
});
