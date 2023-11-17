function hello(){
    alert("hello");
}

$('.selection').click(function(){
    $('.selection').removeClass('selected');
    $('.checkbox-container img').remove();
    $(this).addClass('selected');
    $('.continue-button').addClass('active');

    let img_tag = '<img class="img" src="assets/images/check-icon.png"/>';
    $(this).find('.checkbox-container').append(img_tag);
});

$('.continue-button, .skip-button').click(function(){
    if(!$(this).hasClass('skip-button'))
        if(!$(this).hasClass('active'))
            return;

    let step = 'step-' + $(this).data('step');
    let next_step = 'step-' + ($(this).data('step') + 1);
    
    $('.'+step).addClass('d-flex');
    $('.'+step).addClass('d-none');
    $('.'+next_step).removeClass('d-none');
    $('.'+next_step).addClass('d-flex');
    $('.continue-button').removeClass('active');
});