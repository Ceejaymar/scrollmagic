$(document).ready(function(){
    // Init Scrollmagic
    const controller  = new ScrollMagic.Controller();

    //  loop through each project element
    $('.project').each(function(){     
        // Build a scene
        const ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            duration: '80%', //just # is pixels, with percentage is % of the vh
            triggerHook: 0.7,
            reverse: false // animation only happens once
        }) 

        .setClassToggle(this, 'fade-in') //add class to project01
        .addIndicators({
            name: 'fade-in',
            colorTrigger:'black',
            indent: 100,
            colorStart: '#75C695',
            colorEnd: 'pink'
        }) // requires plugin to fdo this
        .addTo(controller);
    })
});


















