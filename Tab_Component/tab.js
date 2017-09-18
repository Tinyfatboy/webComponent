/**
 * Created by 小胖子 on 2017/9/18.
 */
window.tabs = function(element){
    var $tabs = $(element)

    let selector = 'ol[data-role="nav"]>li'
    $tabs.on('click', selector, e=>{
        let $li = $(e.currentTarget)
        let index = $li.index()

        $li.addClass('active').siblings().removeClass('active')

    $li.closest('ol[data-role="nav"]').siblings('ol[data-role="panes"]').find('li').eq(index).addClass('active').siblings().removeClass('active')

})

}

tabs(document.querySelector('.tabs'))
