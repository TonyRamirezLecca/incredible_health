document.querySelector("#openMenu").addEventListener("click", () => {
  document.querySelector(".dropDownMenu").classList.toggle("showDropDownMenu");
      document.querySelector(".mobileMenu").classList.toggle("fixedMobileMenu");
      document.querySelector("html").classList.toggle("stop-scrolling");
});


  document.querySelectorAll(".dropDownMenu li").forEach((value) => {
    value.addEventListener("click", () => {
      document.querySelector(".dropDownMenu").classList.toggle("showDropDownMenu");
    })
  })