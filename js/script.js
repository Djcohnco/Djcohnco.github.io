function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}


function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}


const checkbox = document.getElementById("checkbox");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");


let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateThemeOnHtmlEl({ theme: currentThemeSetting });


checkbox.addEventListener("change", () => {
    const newTheme = checkbox.checked ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    updateThemeOnHtmlEl({ theme: newTheme });

    currentThemeSetting = newTheme;
});


checkbox.checked = currentThemeSetting === "dark";
