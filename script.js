function lenis() {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
        console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

function navAnimation() {
    document.querySelector("body").addEventListener('wheel', function (dets) {
        if (dets.deltaY > 0) {
            gsap.to("nav", {
                duration: 0.25,
                transform: `translateX(-50%) translateY(-150%)`
            })
        } else {
            gsap.to("nav", {
                duration: 0.25,
                transform: `translateX(-50%) translateY(0%)`
            })
        }
    })
}

function codingAnimation() {

    var letters = document.querySelectorAll(".letter")


    letters.forEach(function (letter) {

        let movingSpeed = 0
        let stemSpeed = 90

        let currentFlower = letter.childNodes[1]
        let currentStem = letter.childNodes[3]


        let currentStemPath = letter.childNodes[3].childNodes[1].childNodes[1].getAttribute('d')

        currentFlower.addEventListener("mousemove", function (dets) {

            movingSpeed = dets.movementX / 4

            stemSpeed = dets.movementX + 90

            currentStemPath = `M 98.5 650.4 Q 98.5 271 ${stemSpeed} 0.017043337314812446 m -4.914035618599561 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`

            gsap.to(currentFlower, {
                transform: `translateX(${movingSpeed}%) rotate(${movingSpeed}deg)`,
                // duration:1
            })
            gsap.to(currentStem.childNodes[1].childNodes[1], {
                attr: { d: currentStemPath }
            })

        })

    })


    var valueA = 90
    let targetUp = 120;
    let targetDown = 80;
    let direction = 1;

    var stemPath = `M 98.5 650.4 Q 98.5 271 102.79821907002196 0.017043337314812446 m -4.914035618599561 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`

    setInterval(function () {

        stemPath = `M 98.5 650.4 Q 98.5 271 ${valueA} 0.017043337314812446 m -4.914035618599561 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`
        valueA += direction;

        if (valueA >= targetUp) {
            direction = -1; // Start decreasing when the upper limit is reached
        } else if (valueA <= targetDown) {
            direction = 1; // Start increasing when the lower limit is reached
        }
        gsap.to('.stem path', {
            attr: { d: stemPath }
        })
        gsap.to('.flower', {
            transform: `translateX(${(valueA - 90) / 4}%) rotate(${(valueA - 90) / 4}deg)`,
        })
    }, 100)

}

function page2Animation() {
    var eyeball = document.querySelector('.eyeball')

    document.querySelector('#page2').addEventListener('mousemove', function (dets) {
        var seeX = (dets.x - eyeball.getBoundingClientRect().x) / 50
        var seeY = (dets.y - eyeball.getBoundingClientRect().y) / 50


        gsap.to('.pupil', {
            transform: `translate(${seeX}%,${seeY}%)`
        })
    })

    var pupilNumber = 0
    document.querySelector('.eye').addEventListener('mouseenter', function () {
        if (pupilNumber == 0) {
            gsap.to('#pupil1', {
                marginTop: '-210px',
                duration: 0.5
            })
            pupilNumber = 1
        } else {
            gsap.to('#pupil1', {
                marginTop: '-40px',
                duration: 0.5
            })
            pupilNumber = 0
        }
    })



    var videoPlay = 0

    var video = document.querySelector(".video-div video")

    document.querySelector(".video-div").addEventListener("click", function () {
        if (videoPlay == 0) {
            document.querySelector(".page2-part1 .video-div .play").style.display = 'none'
            video.play()
            videoPlay++
        } else {
            document.querySelector(".page2-part1 .video-div .play").style.display = 'flex'
            video.pause()

            videoPlay--
        }
    })
}

function page3Page4Animation() {

    var num = 0

    var int

    function userRating() {
        int = setInterval(function () {
            if (num < 49) {
                num += 1
                document.querySelector('#user-review1 .rating h2 span').innerHTML = num / 10
                document.querySelector('#user-review3 .rating h2 span').innerHTML = num / 10
                if (num < 49) {
                    document.querySelector('#user-review2 .rating h2 span').innerHTML = num / 10
                }
            } else {
                clearInterval(int)
            }
        }, 25)
    }

    gsap.from('.user-review', {
        // width:'20%',
        transform: 'translateX(-40%)',
        stagger: {
            amount: 0.5
        },
        onStart: function () {
            userRating()
        },
        duration: 0.7,
        scrollTrigger: {
            trigger: '.all-reviews',
            start: 'top 60%',
        }
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 450,
        centeredSlides: true,
        // freeMode: true,
    });
}

function page5Animation() {


    var bootcamp = [
        {
            id: '1',
            selected: true,
            image: 'https://nodcoding.com/wp-content/uploads/2024/07/home-experience-720x778.jpg',
            name: 'The Stockholm Experience',
            desc: 'Our Stockholm campus is more than a place to learn; it’s a community. Here’s why it’s the perfect launchpad for your tech career.'
        },
        {
            id: '2',
            selected: false,
            image: 'https://nodcoding.com/wp-content/uploads/2024/07/home-accommodation-720x778.jpg',
            name: 'Get Help Finding Accommodation',
            desc: 'Our Stockholm campus is more than a place to learn; it’s a community. Here’s why it’s the perfect launchpad for your tech career.'
        },
        {
            id: '3',
            selected: false,
            image: 'https://nodcoding.com/wp-content/uploads/2024/07/home-islands-720x778.jpg',
            name: 'The City of Islands',
            desc: 'Our Stockholm campus is more than a place to learn; it’s a community. Here’s why it’s the perfect launchpad for your tech career.'
        },
        {
            id: '4',
            selected: false,
            image: 'https://nodcoding.com/wp-content/uploads/2024/07/home-more-ikea-720x778.jpg',
            name: 'More than IKEA',
            desc: 'Our Stockholm campus is more than a place to learn; it’s a community. Here’s why it’s the perfect launchpad for your tech career.'
        },
        {
            id: '5',
            selected: false,
            image: 'https://nodcoding.com/wp-content/uploads/2024/07/home-foodies-720x778.jpg',
            name: 'A Haven for Foodies',
            desc: 'Our Stockholm campus is more than a place to learn; it’s a community. Here’s why it’s the perfect launchpad for your tech career.'
        },
    ]

    function page5ChangePage() {

        var clutter = ''
        var btnClutter = ''
        bootcamp.forEach(function (elem) {
            if (elem.selected) {
                clutter += `<div class="page5-image">
            <img src=${elem.image} alt="">
        </div>
        <div class="page5-details">
            <div class="page5-details1">
                <h2>${elem.name}</h2>
                <p>${elem.desc}</p>
            </div>
        </div>`
            }

            btnClutter += `<h5 id=${elem.id} class=${elem.selected}>${elem.id}</h5>`
        })

        document.querySelector('#page5-container').innerHTML = clutter
        document.querySelector('.page5-buttons').innerHTML = btnClutter
    }

    page5ChangePage()

    document.querySelector('.page5-buttons').addEventListener('click', function (dets) {
        bootcamp.forEach(function (elem) {
            elem.selected = false
        })
        bootcamp[dets.target.id - 1].selected = true

        page5ChangePage()
    })
}

lenis()
navAnimation()
codingAnimation()
page2Animation()
page3Page4Animation()
page5Animation()
