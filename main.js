window.slides = function(element){
    var $el = $(element)
    var $fluidview = $el.children('.fluid-view')
    var $elwidth = $el.width()
    var $item = $fluidview.children('.fluid-slide')
    var width = $item.width()
    var count = $item.length
    var currentIndex = 0

    var $ol = $('<ol class="controls"></ol>')
            for(let i=0;i<count;i++){
                $ol.append(`<li></li>`)
            }

    $el.append($ol)
    var elwidth =$elwidth/2 - $ol.width()/2
    $ol.css({'left':`${elwidth}px`})
    $ol.children('li').eq(0).addClass('liselect')

    $ol.on('click','li',function(e){
                let $li = $(e.currentTarget)
                $ol.children('li').removeClass('liselect')
                $li.addClass('liselect')
                let index= $li.index()
                gotoslide(index)    
            })
    function gotoslide(index){
                if(index<0){
                    index = count-1
                }else if(index>=count){
                    index = 0
                }
                let number= - width*index
                $fluidview.css({transform:`translateX(${number}px`})
                currentIndex = index
            }           
            
            
           
}
slides(document.querySelector('.fluid-slides'))

window.matter = function(element){
    var $proContain = $(element)
    var $proItem = $proContain.children('.pro-item') 

    $proItem.on('mouseover',function(e){
        let $onItem = $(e.currentTarget)
        let $onmatte = $onItem.find('.pro-matte')
        $onmatte.addClass('activeMatte')
        let $h3 = $onmatte.children('h3')
        $h3.css('padding-top','155px')
        
    })

    $proItem.on('mouseout',function(e){
        let $onItem = $(e.currentTarget)
        let $onmatte = $onItem.find('.pro-matte')
        $onmatte.removeClass('activeMatte')
        let $h3 = $onmatte.children('h3')
        $h3.css('padding-top','172px')
    })

}
matter(document.querySelector('.pro-contain'))

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0
    })
