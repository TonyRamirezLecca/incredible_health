    var popUp = document.createElement("div");
    popUp.setAttribute("class", "popUp");

    var popUpExitBtnContainer = document.createElement("div");
    popUpExitBtnContainer.setAttribute("class", "popUpExitBtnContainer");

    var popUpExitBtn = document.createElement("div");
    popUpExitBtn.innerHTML = "&#8249;";
    popUpExitBtn.setAttribute("class", "popUpExitBtn");

    var popUpTextHeader = document.createElement("h1");
    popUpTextHeader.innerHTML = "Save 10% or 20% as a Preferred Customer";
    popUpTextHeader.setAttribute("class", "popUpTextHeader");

    var popUpTextContent = document.createElement("h3");
    popUpTextContent.innerHTML = "Preferred Customer Autoship orders of $99 retail value or more receive FREE GROUND SHIPPING!";
    popUpTextContent.setAttribute("class", "popUpTextContent");

    var popUpTextContent2 = document.createElement("h3");
    popUpTextContent2.innerHTML = "you can also Save 20%-40% as a distributor ";
    popUpTextContent2.setAttribute("class", "popUpTextContent");

    var popUpJoinNowBtn = document.createElement("a");
    popUpJoinNowBtn.href = "https://jen.reliv.com/join-reliv"
    popUpJoinNowBtn.innerHTML = "Join Now";
    popUpJoinNowBtn.setAttribute("class", "popUpJoinNowBtn");

    var popUpTextContent3 = document.createElement("h5");
    popUpTextContent3.innerHTML = "Customers have a 100% money back guarantee for 30 days Distributors have a 100% money back guarantee for 1 year on any unopened product. Feel free to call or email with questions";
    popUpTextContent3.setAttribute("class", "popUpTextContent");
    
    popUpExitBtnContainer.append(popUpExitBtn);
    popUp.append(popUpExitBtnContainer);
    popUp.append(popUpTextHeader);
    popUp.append(popUpTextContent);
    popUp.append(popUpTextContent2);
    popUp.append(popUpJoinNowBtn);
    popUp.append(popUpTextContent3);

    document.querySelector("body").appendChild(popUp)


    popUpExitBtnContainer.addEventListener("click", () => {
        popUpExitBtn.classList.toggle("popUpOpenBtn");
        popUp.classList.toggle("hidePopUp");
    })