const icon_menu = document.querySelector(".icon-menu");
const icon_close = document.querySelector(".icon-close");
const nav_links = document.querySelector(".nav-links");
const nav_links_a = document.querySelectorAll(".nav-links-a");
const saturday_btn = document.querySelector("#saturday-btn");
const sunday_btn = document.querySelector("#sunday-btn");
const main_button = document.querySelector(".main-button");
const secondary_button = document.querySelector(".secondary-button");
const schedule_card_saturday = document.querySelector(
  "#schedule-card-saturday",
);
const schedule_card_sunday = document.querySelector("#schedule-card-sunday");
icon_menu.addEventListener("click", () => {
  nav_links.style.transform = "translateX(0)";
  icon_menu.style.display = "none";
  icon_close.style.display = "block";
});
icon_close.addEventListener("click", () => {
  nav_links.style.transform = "translateX(-150%)";
  icon_menu.style.display = "block";
  icon_close.style.display = "none";
});
nav_links_a.forEach((link) => {
  link.addEventListener("click", () => {
    // Only close the menu if it's open (mobile view)
    if (icon_close.style.display !== "none") {
      nav_links.style.transform = "translateX(-150%)";
      icon_menu.style.display = "block";
      icon_close.style.display = "none";
    }
  });
});
saturday_btn.addEventListener("click", () => {
  saturday_btn.classList.remove("secondary-button");
  saturday_btn.classList.add("main-button");
  schedule_card_saturday.style.display = "flex";
  schedule_card_sunday.style.display = "none";
  sunday_btn.classList.remove("main-button");
  sunday_btn.classList.add("secondary-button");
});
sunday_btn.addEventListener("click", () => {
  sunday_btn.classList.remove("secondary-button");
  sunday_btn.classList.add("main-button");
  schedule_card_sunday.style.display = "flex";
  schedule_card_saturday.style.display = "none";
  saturday_btn.classList.remove("main-button");
  saturday_btn.classList.add("secondary-button");
});
