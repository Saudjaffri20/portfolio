// gsap cursor animation


var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.020, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$("a").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


// const cursor = document.querySelector('.cursor');
// const cursorFollower = document.querySelector('.cursor-follower');
// const li = document.querySelectorAll('ul li');

// const updateCursor = (e) => {
//     gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY });
//     gsap.to(cursorFollower, 0.7, { x: e.clientX, y: e.clientY });
// }

// window.addEventListener('mousemove', updateCursor);




// var menuLinks = Array.from(document.querySelectorAll('.links'));

// console.log(menuLinks);

// menuLinks.forEach(e => {

//     e.addEventListener('click', (w) => {

//         var hoverMenu = Array.from(document.querySelectorAll('.hover-menu'));
//         console.log(hoverMenu.innerHTML);
//     })

// });






// cursor.style.top = e.pageY + 'px';
// cursor.style.left = e.pageX + 'px';
// cursorFollower.style.top = e.pageY + 'px';
// cursorFollower.style.left = e.pageX + 'px';

// var $circle = $('.cursor'),
//     $follow = $('.cursor-follower');

// function moveCircle(e) {
//     TweenLite.to($circle, 0.2, {
//         x: e.clientX,
//         y: e.clientY
//     });
//     TweenLite.to($follow, 0.7, {
//         x: e.clientX,
//         y: e.clientY
//     });
// }

// function hoverFunc(e) {
//     TweenLite.to($circle, 0.1, {
//         opacity: 1,
//         scale: 0
//     });
//     TweenLite.to($follow, 0.1, {
//         scale: 1.5
//     });
// }

// function unhoverFunc(e) {
//     TweenLite.to($circle, 0.1, {
//         opacity: 1,
//         scale: 1
//     });
//     TweenLite.to($follow, 0.1, {
//         scale: 1
//     });
// }

// $(window).on('mousemove', moveCircle);

// $("li").hover(hoverFunc, unhoverFunc);
// $("a").hover(hoverFunc, unhoverFunc);
// $("button").hover(hoverFunc, unhoverFunc);
// $("li>a>span").hover(hoverFunc, unhoverFunc);

// gsap.set('.cursor', { xPercent: -50, yPercent: -50 });
// gsap.set('.cursor-follower', { xPercent: -50, yPercent: -50 });

// var cursor = document.querySelector('.cursor');
// var cursorFollower = document.querySelector('.cursor-follower');

// window.addEventListener('mousemove', e => {
//     gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY });
//     gsap.to(cursorFollower, 0.7, { x: e.clientX, y: e.clientY });
// })

// gsap cursor animation



// menu btn


try {

    var menuBtn = document.querySelector('#menu-btn');

    menuBtn.addEventListener("click", () => {

        var fullMenu = document.querySelector('.offcanvas-menu');
        fullMenu.classList.add('active');

    });

    var menuBtn = document.querySelector('#close-btn');

    menuBtn.addEventListener("click", () => {

        var fullMenu = document.querySelector('.offcanvas-menu');
        fullMenu.classList.remove('active');

    });




    var menuLink1 = document.querySelector('.link-1');

    menuLink1.addEventListener("mouseenter", () => {

        var menuLink1 = document.querySelector('.h-1');

        menuLink1.classList.add('show');

    });

    menuLink1.addEventListener("mouseleave", () => {

        var menuLink1 = document.querySelector('.h-1');

        menuLink1.classList.remove('show');

    });









    var menuLink1 = document.querySelector('.link-2');

    menuLink1.addEventListener("mouseenter", () => {

        var menuLink1 = document.querySelector('.h-2');

        menuLink1.classList.add('show');

    });

    menuLink1.addEventListener("mouseleave", () => {

        var menuLink1 = document.querySelector('.h-2');

        menuLink1.classList.remove('show');

    });

    var menuLink1 = document.querySelector('.link-3');

    menuLink1.addEventListener("mouseenter", () => {

        var menuLink1 = document.querySelector('.h-3');

        menuLink1.classList.add('show');

    });

    menuLink1.addEventListener("mouseleave", () => {

        var menuLink1 = document.querySelector('.h-3');

        menuLink1.classList.remove('show');

    });

    var menuLink1 = document.querySelector('.link-4');

    menuLink1.addEventListener("mouseenter", () => {

        var menuLink1 = document.querySelector('.h-4');

        menuLink1.classList.add('show');

    });

    menuLink1.addEventListener("mouseleave", () => {

        var menuLink1 = document.querySelector('.h-4');

        menuLink1.classList.remove('show');

    });

} catch (e) {}






// $("ul li a").hover(hoverFunc, unhoverFunc);
// $("ul li a span").hover(hoverFunc, unhoverFunc);

// particle bg animation

tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
        color: "#000"
    },
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 50, smooth: 10 }
            },
            resize: true
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 150, duration: 0.4 }
        }
    },
    particles: {
        color: { value: "ffffff8f" },
        move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 500
            },
            value: 80
        },
        opacity: {
            animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: "max",
                count: 1,
                destroy: "min"
            },
            value: {
                min: 0,
                max: 0.5
            }
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 2 }
        }
    }
});

// particle bg animation


// gsap logo animation 
// $(document).ready(function() {
//     var slideIndexS = 0,
//         sliding = false;

//     $('#fullpage').fullpage({
//         sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
//         anchors: ['slide1', 'slide2', 'slide2'],
//         menu: '#menu',
//         css3: true,

//         afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
//             slideIndexS = slideIndex + 1;
//         },
//         onLeave: function(index, nextIndex, direction) {
//             //console.log(index, nextIndex, direction,slideIndex,sliding);
//             if (index == 2 && !sliding) {
//                 if (direction == 'down' && slideIndexS < 4) {
//                     $.fn.fullpage.moveSlideRight();
//                     return false;
//                 } else if (direction == 'up' && slideIndexS > 1) {
//                     $.fn.fullpage.moveSlideLeft();
//                     return false;
//                 }
//             } else if (sliding) {
//                 return false;
//             }
//         },

//     });
// });


// gsap.registerPlugin(scrollTrigger);


gsap.to('h1', {
    // scrollTrigger: '.main-logo',
    x: "0",
    duration: 1,
    stagger: 0.1
})