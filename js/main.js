jQuery(document).ready(function(){

    // rand
    function randomFunction (min, max){
        min = parseInt(min);
        max = parseInt(max);
        return Math.floor( Math.random() * (max - min + 1)) + min;
    }

    var i = 0;
    var bg_speed;
    setInterval( function() {
        if (bg_speed >= 1350) {
            i = 0;
        }
        i++
        bg_speed = 0+i*6;
        $('#wrapper').css('background-position', -bg_speed+'px' + ' 90%'); 
        //var hero_position_down = Math.floor($("#hero" ).offset().top);
        //$('#hero').css('top', hero_position_down+1);
    }, 60);
    
    var moveItemOnClick = true;
    $('#wrapper').bind('click', function(){
        if(moveItemOnClick) {
            moveItemOnClick = false
            var hero_position = Math.floor($("#hero" ).offset().top);
            $('#hero').animate({
                'top': hero_position-150
            }, 300); 
            $('#hero').animate({
                'top': hero_position
            }, 600, function(){
                moveItemOnClick = true;
            });
        }
    });
    
    function removeMushroom(){
        $(this).remove();
    }
    
    var pointsCounter = $('#points_counter');
    $(pointsCounter).text('100');
    
    // check game items coordinates and count points
    function gameItems(elClass, pointsFunction){
        $(elClass).each(function(){
            var jumpPoints = parseInt($(pointsCounter).html());
            // hero coordinates
            var topHero = $('#hero').position().top;
            var bottomHero = topHero + $('#hero').height();
            var leftHero = $('#hero').position().left;
            var rightHero = $('#hero').position().left + $('#hero').width();
            // mushroom coordinates
            var topCoins = $(elClass).position().top;
            var leftCoins = $(elClass).position().left;
            // if coordinates equal
            if(topCoins > topHero && topCoins < bottomHero && leftCoins > leftHero && leftCoins < rightHero){
                $(this).remove();
                $(pointsCounter).text( pointsFunction( jumpPoints ) );
            }
        });
    }
    
    //create game items
    var windowWidth = $('body').width();
    var randNum = randomFunction (2000, 8000);
    function gameItemMove(elClass) {
        var runItem = randomFunction (2000, 5000);
        var gameItem = $('<span class="' + elClass + '" />');
        $('#wrapper .inner').append(gameItem);    
        jQuery(gameItem).animate({right: windowWidth}, runItem, 'linear', removeMushroom);
        if(gameItem.offset.right == windowWidth) {
            $(this).remove();
        }
        setInterval(function() { 
            gameItems('.coins', function(j) { return j += 1; });
            gameItems('.mushroom', function(j) { return j -= 2; });
        }, 30); 
    }    
    setInterval( function() {
        gameItemMove('mushroom');
    }, randomFunction (2000, 6000));    
    setInterval( function() {
        gameItemMove('coins');
    }, randomFunction (5000, 15000));
    
    //restart game
    $('#restart-btn').click(function() {
        location.reload();
    });


	
});