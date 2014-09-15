var currentState = 1;
function toggleDown(){
    if ($('.link').hasClass('front1')){
        $('.link').removeClass('front1').addClass('front2');
    }
    else{
        $('.link').removeClass('front2').addClass('front1');
    }
}
$(document).keydown(function(e){

    //e.which is set by jQuery for those browsers that do not normally support e.keyCode.
    var keyCode = e.keyCode || e.which;

    if (keyCode == 38)
    {
        alert( "Up arrow key hit." );
        return false;
    }

    if (keyCode == 40)
    {
        toggleDown();
        return false;
    }

    if (keyCode == 37)
    {
        alert( "Left arrow key hit." );
        return false;
    }

    if (keyCode == 39)
    {
        alert( "Right arrow key hit." );
        return false;
    }

});