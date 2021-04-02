// ==UserScript==
// @name         RemplacerCSSFlipnote
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remplacer le CSS de Flipnote Sudomemo avec le mien !
// @author       Glin Kidpaddleetcie
// @grant        none
// @connect     sudomemo.net
// @connect     raw.githubusercontent.com
// @run-at      document-end
// @include     http://*
// @include     https://*
// @updateURL   https://raw.githubusercontent.com/Kidpaddleetcie/FlipnoteGlinCSS/main/FlipnoteGlinCSS.js
// @downloadURL https://raw.githubusercontent.com/Kidpaddleetcie/FlipnoteGlinCSS/main/FlipnoteGlinCSS.js
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_info
// @grant       GM_openInTab
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_notification
// @grant       GM_download
// @grant       GM.info
// @grant       GM.listValues
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       GM.deleteValue
// @grant       GM.openInTab
// @grant       GM.setClipboard
// @grant       GM.xmlHttpRequest
// @connect     *
// ==/UserScript==

(function() {
    'use strict';
    let tspliteuh = document.URL.split('/');
    const elements = document.getElementsByTagName("link");
    if (tspliteuh[2] === "www.sudomemo.net") {
        document.head.innerHTML = '<link rel="stylesheet" href="https://raw.githubusercontent.com/Kidpaddleetcie/FlipnoteGlinCSS/main/FlipnoteGlinCSS.css">';
    }

})();