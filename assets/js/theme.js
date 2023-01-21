let toggleTheme = (theme) => {
    if (theme == "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}


let setTheme = (theme) => {
    transTheme();

    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }
    else {
        document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
};


let transTheme = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 500)
}


let initTheme = (theme) => {
    if (theme == null || theme == 'null') {
        const userPref = window.matchMedia;
        if (userPref && userPref('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
        }
    }

    setTheme(theme);
}


initTheme(localStorage.getItem("theme"));

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("theme-toggle").addEventListener("click", function () {
        toggleTheme(localStorage.getItem("theme"));
    });
});
