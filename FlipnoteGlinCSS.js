// ==UserScript==
// @name         RemplacerCSSFlipnote
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remplacer le CSS de Flipnote Sudomemo avec le mien !
// @author       Glin Kidpaddleetcie
// @grant        none
// @connect     sudomemo.net
// @run-at      document-end
// @include     http://*
// @include     https://*
// @updateURL   https://raw.githubusercontent.com/Kidpaddleetcie/FlipnoteGlinCSS/main/FlipnoteGlinCSS.js
// @downloadURL https://raw.githubusercontent.com/Kidpaddleetcie/FlipnoteGlinCSS/main/FlipnoteGlinCSS.js
// ==/UserScript==

(function() {
    'use strict';
    let tspliteuh = document.URL.split('/');
    const elements = document.getElementsByTagName("link");
    if (tspliteuh[2] === "www.sudomemo.net") {
        for (let ii = 0; ii < elements.length; ii++) {
            console.log(elements[ii]);
            if (elements[ii].href === '/theatre_assets/css/main.css?ver=20210402_01') {
                console.log(elements[ii]);
                elements[ii].href = 'https://raw.githubusercontent.com/Kidpaddleetcie/FlipnoteGlinCSS/main/FlipnoteGlinCSS.css';
            }
        }

    }

})();