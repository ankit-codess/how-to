window.addEventListener("scroll", () => {

    let navbarContainer, scrollTop;

    navbarContainer = document.querySelector(".navbar-container");

    // returns no. of pixel you have scrolled from top of your browser
    scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop, window.pageYOffset);

    if (scrollTop > 30) {
        // for hiding whole navbar
        // navbarContainer.style.top = "-7rem";

        // for hiding logo only
        navbarContainer.style.top = "-4rem";
    }
    else {
        navbarContainer.style.top = "0";
    }

});