export default () => {
        const t = document.documentElement,
            e = localStorage.getItem("scheme"),
            o = document.getElementById("darkModeToggler");
        if (e && t.classList.add(e), "dark" === e) {
            if (!o) return;
            o.checked = "checked"
        }
        o.addEventListener("change", () => {
            (e => !(!t.classList.contains("dark") && e.checked))(o) ? (t.classList.remove("dark"), t.classList.add("light"), localStorage.removeItem("scheme")) : (t.classList.remove("light"), t.classList.add("dark"), localStorage.setItem("scheme", "dark"))
        })
    
}
