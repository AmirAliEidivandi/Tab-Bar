// Get All the tabs
const tabs = document.querySelectorAll(".tab");

tabs.forEach((clickedTab) => {
    // Add onClick event listener on each tab
    clickedTab.addEventListener("click", () => {
        // Remove the Active Class from all the tabs
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        // add the active class on the clicked tab
        clickedTab.classList.add("active");
        const clickedTabBGColor = getComputedStyle(clickedTab).getPropertyValue("color");
        document.body.style.background = clickedTabBGColor;
    });
});