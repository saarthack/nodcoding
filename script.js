function navAnimation(){
    document.querySelector("body").addEventListener('wheel',function(dets){
        if(dets.deltaY > 0){
            gsap.to("nav",{
                duration:0.25,
                transform: `translateX(-50%) translateY(-150%)`
            })
        }else{
            gsap.to("nav",{
                duration:0.25,
                transform: `translateX(-50%) translateY(0%)`
            })
        }
    })
}

navAnimation()


var cFlower = document.querySelector("#letter-c .flower")

var movingSpeed = 0

cFlower.addEventListener("mousemove",function(dets){

    movingSpeed = dets.movementX/10
    gsap.to(cFlower,{
        transform :`translateX(${movingSpeed}%) rotate(${movingSpeed}deg)`,
        // duration:1
    })
    console.log(movingSpeed);
})
