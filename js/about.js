function parallax() {
  if (windowWidth > 900) {
    var windowHeight = window.innerHeight;
    var pagePosition = window.pageYOffset + windowHeight;

    var img1Position = 0;

    var imageSpacerPosition1 = document.querySelectorAll(".storyImgSpacer")[0]
      .offsetTop;
    var img2Position =
      document.querySelector("#parallaxImg2").offsetTop + imageSpacerPosition1;

    var imageSpacerPosition2 = document.querySelectorAll(".storyImgSpacer")[1]
      .offsetTop;
    var img3Position =
      document.querySelector("#parallaxImg3").offsetTop + imageSpacerPosition2;

    var imageSpacerPosition3 = document.querySelectorAll(".storyImgSpacer")[2]
      .offsetTop;
    var img4Position =
      document.querySelector("#parallaxImg4").offsetTop + imageSpacerPosition3;

    if (pagePosition > img4Position) {
      document.querySelector(
        "#parallaxImg4"
      ).style.transform = `translateY(${(pagePosition - img4Position) / 30}%)`;
    }
    if (pagePosition > img3Position) {
      document.querySelector(
        "#parallaxImg3"
      ).style.transform = `translateY(${(pagePosition - img3Position) / 30}%)`;
    }
    if (pagePosition > img2Position) {
      document.querySelector(
        "#parallaxImg2"
      ).style.transform = `translateY(${(pagePosition - img2Position) / 30}%)`;
    }
    if (pagePosition - windowHeight <= windowHeight) {
      document.querySelector(
        "#parallaxImg1"
      ).style.transform = `translateY(${(pagePosition - windowHeight) / 26}%)`;
    }
    if (pagePosition - windowHeight <= windowHeight) {
      document.querySelector(".aboutHeaderText").style.opacity =
        (pagePosition + 200 - (pagePosition - windowHeight)) / pagePosition;
    }
  } else {
    document.querySelector("#parallaxImg4").style.transform = ``;
    document.querySelector("#parallaxImg3").style.transform = ``;
    document.querySelector("#parallaxImg2").style.transform = ``;
    document.querySelector("#parallaxImg1").style.transform = ``;
    document.querySelector(".aboutHeaderText").style.opacity = "";
  }
}

parallax();

var windowWidth = window.innerWidth;
window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  console.log(windowWidth);
});

document.addEventListener("scroll", () => {
  parallax();
});
