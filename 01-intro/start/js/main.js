$(document).ready(function(){
    // Init Scrollmagic
    const controller  = new ScrollMagic.Controller();

    // Build a scene
    const ourScene = new ScrollMagic.Scene({
        triggerElement: '#project01'
    }) 

    .setClassToggle('#project01', 'fade-in') //add class to project01
    .addIndicators({
        name: 'fade-in',
        colorTrigger:'black',
        indent: 200,
        colorStart: '#75C659'
    }) // requires plugin to fdo this
    .addTo(controller);

});


















