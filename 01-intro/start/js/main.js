$(document).ready(function(){
    // Init Scrollmagic
    const controller  = new ScrollMagic.Controller();

    // pin the intro
    const pin = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '25%'
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller)

    // Parallax timeine
    const parallaxTL = new TimelineMax();
    parallaxTL
        .from('.content-wrapper', 0.4, {autoAlpha: 0, ease: Power0.easeNone}, 0.4)
        .from('.bcg', 2, {y: '-50%', ease: Power0.easeNone}, 0 ) //the last zero makes the second 'from' start at the same time as the first from
    // Parallax scene
    const parallax = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        triggerHook: 1,
        duration: '100%'
    })
    .setTween(parallaxTL)
    .addTo(controller);

    //  loop through each project element
    $('.project').each(function(){     
        // Build a scene
        const ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            duration: '80%', //just # is pixels, with percentage is % of the vh
            triggerHook: 0.7,
            // reverse: false // animation only happens once
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


















