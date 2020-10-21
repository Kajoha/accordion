function hidden(element) {

    function shown(panel) {
        let expandedPanel = element.querySelector(".active");
        if (expandedPanel) {
            expandedPanel.classList.remove("active");
        } else {
            panel.classList.add("active");
        }
    }
    let allPanels = element.querySelectorAll(".panel");
    for (let i = 0; i < allPanels.length; i++) {
        allPanels[i].addEventListener("click", (event) => {
            shown(event.currentTarget);
        });
    }
}

hidden(document.getElementById("accordion"));
