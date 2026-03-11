var wait = false;

function RemoveSidebarClass() {
    document.querySelectorAll('#sideBar-list li')
        .forEach(li => li.classList.remove('sidebar-current'));
}

document.body.addEventListener("click", function(event) {
    const item = event.target.closest(".sideBar-item");
    if (!item) return;

    wait = true;
    RemoveSidebarClass();
    item.classList.add("sidebar-current");

    const target = item.id.replace("-sidebar", "");
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("scroll", () => {
    if (wait) return wait = false;

    document.querySelectorAll(".Info-Container").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 150 && rect.bottom > 150) {
            RemoveSidebarClass();
            const link = document.getElementById(section.id + "-sidebar");
            if (link) link.classList.add("sidebar-current");
        }
    });
});

