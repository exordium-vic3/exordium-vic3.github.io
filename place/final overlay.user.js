// ==UserScript==
// @name         FUCK NFTS Overlay
// @namespace    http://tampermonkey.net/
// @version      2.4
// @description  Keep the canvas beautiful!
// @author       Mabi19
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://exordium.breadcraft.me/place/final%20overlay.user.js
// @downloadURL  https://exordium.breadcraft.me/place/final%20overlay.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/959448738160607252/960632122144604290/okiguess.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated; image-rendering: -moz-crisp-edges;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}