/* =====================================================
   PAGE TRANSITION
===================================================== */

window.addEventListener("load", () => {

    const transition =
        document.getElementById("page-transition");

    const portfolio =
        document.getElementById("portfolio");


    /*
       Time before dashboard appears.

       3500 = 3.5 seconds
    */

    setTimeout(() => {

        /*
           Hide logo transition
        */

        transition.classList.add("hide");


        /*
           Reveal portfolio
        */

        setTimeout(() => {

            portfolio.classList.add("show");

        }, 300);

    }, 3500);

});