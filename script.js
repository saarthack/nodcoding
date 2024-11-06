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