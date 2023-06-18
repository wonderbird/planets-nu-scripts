// ==UserScript==
// @name         Stefans Planets.nu Scripts
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  User scripts to enhance the experience of the https://planets.nu strategy game.
// @author       Stefan Boos <kontakt@boos.systems>
// @copyright    Stefan Boos, 2023
// @license      MIT License
// @homepage     https://github.com/wonderbird/planets-nu-scripts
// @match        http://planets.nu/*
// @match        https://planets.nu/*
// @match        http://*.planets.nu/*
// @match        https://*.planets.nu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=planets.nu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log(scriptInfoText());
})();

function scriptInfoText() {
    return "Welcome to Stefan's Planets.nu scripts";
}

module.exports = scriptInfoText;
