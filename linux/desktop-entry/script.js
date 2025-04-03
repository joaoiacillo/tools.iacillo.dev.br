(function () {
    const fileEl = document.getElementById("file");

    const entryPropsEl = document.getElementById("entry-properties");
    const entryPropEls = document.querySelectorAll(".entry-prop");

    entryPropsEl.addEventListener("input", (render = function() {
        fileEl.innerText = "[Desktop Entry]\n";
        entryPropEls.forEach((fp) => {
            const name = fp.id[0].toUpperCase() + fp.id.slice(1, fp.id.length);
            const value = fp.value.trim();
            if (value) {
                fileEl.innerText += `${name}=${value}\n`;
            } else if (fp.dataset.default) {
                fileEl.innerText += `${name}=${fp.dataset.default}\n`;
            }
        });
    }));

    render();
})();