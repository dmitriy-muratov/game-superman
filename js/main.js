jQuery(document).ready(function(){


    
   /* function getRandom(num){
        var my_num = Math.floor((Math.random()*shell_count));
        return my_num;
    }
    var numRand = getRandom(shell_count);*/
    
    var i = 0;
    setInterval( function() {
        i++
        var bg_speed = 0+i*3;
        $('#wrapper').css('background-position', -bg_speed+'px' + ' 90%');  
        
        /*var hero_position_down = Math.floor($("#hero" ).offset().top);
        $('#hero').css('top', hero_position_down+1);*/
        
    }, 30);
    
    
    $('#wrapper').bind('click', function(){

        var hero_position = Math.floor($("#hero" ).offset().top);
        $('#hero').animate({
            'top': hero_position-150
        }, 300); 
        var hero_position = Math.floor($("#hero" ).offset().top);
        $('#hero').animate({
            'top': hero_position
        }, 600); 
        
    });
    
    
    var enemy;
    var enemy_position;
    var enemy_position_left;
    //setInterval( function() {
        enemy = $('#wrapper').append('<span class="mushroom" />');  
        enemy_position = enemy.position();
        enemy_position_left = enemy_position.left;
    //}, 1500);
    
    setInterval( function() { 
        enemy = $('.mushroom');
        enemy_position = enemy.position();
        enemy_position_left = enemy_position.left;
        $(enemy).css('left', enemy_position_left-10);       
    }, 30);
    
    //restart game
    $('#restart-btn').click(function() {
        location.reload();
    });


	
});