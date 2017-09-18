/**
 * Created by 小胖子 on 2017/9/18.
 */
var container = document.querySelector('.container')
var banner = document.querySelector('.banner')
container.addEventListener('mousemove', function(e) {
//  console.log(clientX, e.clientY)
    let width = container.getBoundingClientRect().width
    let height = container.getBoundingClientRect().height
    let xCenter = container.offsetLeft + width / 2
    let yCenter = container.offsetTop + height / 2
    let xDiff = e.clientX - xCenter
    let yDiff = e.clientY - yCenter

//  let distance = Math.sqrt(xDiff*xDiff + yDiff*yDiff)
//  let maxDistance = Math.sqrt(width*width + height*height)

    let xPercent = xDiff / width * 2
    let yPercent = yDiff / height * 2
    console.log(xPercent, yPercent)

    let xDeg = xPercent * 9
    let yDeg = yPercent * 12

    banner.style.transform = `translateZ(-10px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
})

