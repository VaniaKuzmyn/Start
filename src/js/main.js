"use strict";

$(document).ready(function () {
   
    $(window).scroll(function () {
        
    })

    if (window.scrollY >= $('.section').offset().top - window.innerHeight) {

    }

    $(window).resize(function () {
        if (window.innerWidth <= 576) {

        }
        else if (window.innerWidth > 576) {

        }
    })


    if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i)) {
        console.log('msie') // Ie
        
        if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
            console.log('ie10') // Ie10
        }
    } 
    else if (navigator.userAgent.match(/firefox/i)) { 
        console.log('Firefox mozila') // Gecko = Firefox Mozila
    }
    else if (navigator.userAgent.match(/chrome/i)) {
        console.log('Chrome and Opera') // Chrome and Opera(webkit)
    }
    else if (navigator.userAgent.match(/safari/i)) {
        console.log('Safary') // Safary (and Opera)
    }

    
    
})