/**
 * Created by 小胖子 on 2017/9/18.
 */
window.slides = function(element){
    var $el = $(element)
    var width = $el.width()
    var count = $el.find('.slide').length
    var currentIndex = 0
    let $view = $el.children('.view')
    let timeId

    var $ol = $('<ol class="controls"></ol>')
    for(let i=0;i<count;i++){
        $ol.append(`<li></li>`)
    }
    $el.append($ol)

    $controls=$ol.find('li')
    $controls.eq(0).addClass('active')

    $el.on('click','li',function(e){
        let $li = $(e.currentTarget)
        let index = $li.index()
        goToSlide(index)
    })

    $view.on('mouseenter',function(){
        window.clearInterval(timeId)
    })
    $view.on('mouseleave',function(){
        autoPlay()
    })

    function goToSlide(index){
        if(index<0){
            index = count -1
        }else if(index>=count){
            index = 0
        }
        if(index===0){
            let $li = $el.find('.slide').eq(0).clone()
            $li.appendTo($view)
            let number = -width*count
            $view.one("transitionend",function(){
                $li.remove()
                let oldTransition = $view.css('transition')
                $view.css({
                    transition:'none',
                    transform:`translateX(0px)`
                })
                $view.offset()
                $view.css('transition',oldTransition)
                currentIndex = index
            })
            $view.css({ transform:`translateX(${number}px)`
            })
            $controls.removeClass('active')
            $controls.eq(index).addClass('active')
            return
        }
        let number = -width*index
        $view.css({ transform:`translateX(${number}px)`
        })
        $controls.removeClass('active')
        $controls.eq(index).addClass('active')
        currentIndex = index
    }
    function autoPlay(){
        timeId = setInterval(function(){
            goToSlide(currentIndex+1)
        },2000)
    }
    autoPlay()

}

slides(document.querySelectorAll('.slides')[0])






