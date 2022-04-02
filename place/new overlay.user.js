// ==UserScript==
// @name         FUCK NFTS New Overlay
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Keep the canvas beautiful!
// @author       oralekin from osu! /r/osuplace
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://exordium.breadcraft.me/place/overlay.user.js
// @downloadURL  https://exordium.breadcraft.me/place/overlay.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://exordium.breadcraft.me/place/new%20overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated; image-rendering: -moz-crisp-edges;width: 2000pxheight: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
