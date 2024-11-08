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

navAnimation()


var cFlower = document.querySelector("#letter-c .flower")

var movingSpeed = 0

cFlower.addEventListener("mousemove", function (dets) {

    movingSpeed = dets.movementX / 10
    gsap.to(cFlower, {
        transform: `translateX(${movingSpeed}%) rotate(${movingSpeed}deg)`,
        // duration:1
    })
})

var valueA = 90
let targetUp = 130; // Upper limit
let targetDown = 70; // Lower limit
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

    console.log(valueA); // Output the current value

    gsap.to('.stem path',{
        attr:{d:stemPath}
    })
    gsap.to('.flower',{
        transform: `translateX(${(valueA - 90)/4}%) rotate(${(valueA - 90)/4}deg)`,
    })
}, 50)