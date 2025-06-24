document.addEventListener("DOMContentLoaded", function () {
  // 漢堡選單
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const dropdownToggles = document.querySelectorAll(
    ".has-dropdown > .dropdown-toggle"
  );

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault(); // 防止預設跳轉
      const parent = this.parentElement;
      parent.classList.toggle("open");
    });
  });

  // 導覽列高亮
  const links = document.querySelectorAll(".nav-links li a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  console.log("yes");
});
function openPopup(imgSrc) {
  document.getElementById("popup-img").src = imgSrc;
  document.getElementById("popup").style.display = "flex";
}

function closePopup(event) {
  if (event.target.id === "popup" || event.target.className === "close-btn") {
    document.getElementById("popup").style.display = "none";
  }
}
// 顯示或隱藏回頂部按鈕
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
