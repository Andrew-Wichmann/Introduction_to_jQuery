$('document').ready(function(){
    $('input[name=name]').focus(function(){
        $('input[name=name]').css('outline-style', 'solid');
        $('input[name=name]').css('outline-color', '#FF0000');
    })
})
