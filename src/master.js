/* ── Date ── */
(function () {
  const el = document.getElementById("currentDate");
  if (!el) return;
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  el.textContent =
    now.getFullYear() +
    "/" +
    pad(now.getMonth() + 1) +
    "/" +
    pad(now.getDate()) +
    "   " +
    now.toLocaleTimeString("ar", { hour: "2-digit", minute: "2-digit" });
})();

/* ── Sidebar (minimal stub — your real JS already handles this) ── */
const sidebar = document.getElementById("sidebar");
const mainWrapper = document.getElementById("mainWrapper");
const overlay = document.getElementById("overlay");
let collapsed = false;
const isMobile = () => window.innerWidth < 1024;

function toggleSub(parent) {
  if (collapsed && !isMobile()) return;
  const sub = parent.nextElementSibling;
  const isOpen = sub && sub.classList.contains("open");
  document
    .querySelectorAll(".sub-nav.open")
    .forEach((el) => el.classList.remove("open"));
  document
    .querySelectorAll(".nav-parent.open")
    .forEach((el) => el.classList.remove("open"));
  if (!isOpen && sub) {
    sub.classList.add("open");
    parent.classList.add("open");
  }
}

const toggleBtn = document.getElementById("sidebarToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    collapsed = !collapsed;
    sidebar.style.width = collapsed ? "60px" : "220px";
    mainWrapper.style.marginRight = collapsed ? "60px" : "220px";
  });
}

function closeMobile() {
  sidebar.classList.remove("mobile-open");
  overlay.classList.add("hidden");
  overlay.classList.remove("active");
}
