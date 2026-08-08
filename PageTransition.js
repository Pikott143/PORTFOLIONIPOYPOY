window.addEventListener("load", () => {

    const transition = document.getElementById("page-transition");
    const dashboard = document.getElementById("dashboard");

    // Time before opening dashboard
    const transitionTime = 3500;


    setTimeout(() => {

        // Hide intro
        transition.classList.add("hide");

        // Show dashboard
        dashboard.classList.add("show");

    }, transitionTime);

});