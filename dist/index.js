

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

var useElementOnScreen = function () {
    console.log("useElementOnScreen");
    return;
};

exports.useElementOnScreen = useElementOnScreen;
//# sourceMappingURL=index.js.map
