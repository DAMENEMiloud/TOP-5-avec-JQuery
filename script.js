$(function(){
    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalItems = $mainMenuItems.length,
        openItem = 2,
        
        init = function(){
            bindEvents();
            if(itemValid(openItem))
                animateItem($mainMenuItems.eq(openItem), true, 700);
        },
        
        bindEvents = function(){
            $mainMenuItems.children(".images").click(function(){
            var newOpenItem = $(this).parent().index();
            chekAndAnimateItem(newOpenItem);
                
                
            });
            
            $(".button").click(function(){
                var newItem =  $(this).index();
                chekAndAnimateItem(newItem);
            });
            
            $(".button").hover(
                function(){
                    $(this).addClass("hovered");
                },
                function(){
                    $(this).removeClass("hovered");
            });
        },
        
        chekAndAnimateItem = function(indexItem){
            var $item = $mainMenuItems.eq(indexItem);
                
                if(openItem === indexItem)
                    {
                        animateItem($item, false, 250);
                        openItem = -1;
                        return 0;
                    }
                else{
                    
                    if(itemValid(indexItem)){
                        animateItem($mainMenuItems.eq(openItem), false, 250);
                        openItem = indexItem;
                        animateItem($item, true,250);
                        
                    }
                }
        },
        
        itemValid = function(index){
            return (index > -1 && index < totalItems);
        },
        
        animateItem = function($item, toOpen, speed){
            var $colorItem = $item.find(".color");
            var colorItemPar = toOpen ? {left : "0px"} : {left : "140px"};
            var itemPar = toOpen ? {width: "420px"} : {width : "140px"};
                
            $colorItem.animate(colorItemPar, 250);
            $item.animate(itemPar, 250);
        }
        
        ;
    init();
});