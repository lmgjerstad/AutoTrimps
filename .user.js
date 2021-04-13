// ==UserScript==
// @name         AutoTrimps-lmgjerstad
// @version      2.1.6.9-genbtc-3-23-2018
// @namespace    https://lmgjerstad.github.io/AutoTrimps
// @updateURL    https://lmgjerstad.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, lmgjerstad
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *genbtc.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-script';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://lmgjerstad.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
