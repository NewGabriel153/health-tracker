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

$('.step-1 .selection').click(function(){
    $('.step-1').removeClass('d-flex');
    $('.step-1').addClass('d-none');
    $('.step-2').removeClass('d-none');
    $('.step-2').addClass('d-flex');

    $('.continue-button').removeClass('active');
});

$('.continue-button, .skip-button').click(function(){
    if(!$(this).hasClass('skip-button'))
        if(!$(this).hasClass('active'))
            return;
    
    let data_step = $(this).data('step');
    let step = 'step-' + data_step;
    let next_step = 'step-' + (data_step + 1);
    
    $('.'+step).removeClass('d-flex');
    $('.'+step).addClass('d-none');
    $('.'+next_step).removeClass('d-none');
    $('.'+next_step).addClass('d-flex');
    if((data_step+1)!=4 && (data_step+1)!=5 && (data_step+1)!=6)
    {
        $('.continue-button').removeClass('active');
        return;
    }
    $('.continue-button').addClass('active');
});

$('.back-button').click(function(){
    let back_step = 'step-' + ($(this).data('step')-1);
    let current_step = 'step-' + $(this).data('step');
    
    $('.'+current_step).removeClass('d-flex');
    $('.'+current_step).addClass('d-none');
    console.log(back_step);
    $('.'+back_step).removeClass('d-none');
    $('.'+back_step).addClass('d-flex');

    $('.continue-button').removeClass('active');

});

$('#describe-skin-range').change(function(){
    let img_src = 'describe-skin-'+(parseInt($(this).val())+1)+'.png';
    $('.describe-skin').attr('src', 'assets/images/'+img_src);
});

$('#moisturize-range').change(function(){
    let classification = '';
    let description = '';
    let range_val = $(this).val();

    $('.description').addClass('d-none');
    $('.desc-'+[range_val]).removeClass('d-none');

    if(range_val<5)
    {
        $('.classification').addClass('d-none');
        $('.newcomer').removeClass('d-none');
        $('.newcomer').addClass('d-flex');
    }
    else if(range_val>4 && range_val<8)
    {
        $('.classification').addClass('d-none');
        $('.amateur').removeClass('d-none');
        $('.amateur').addClass('d-flex');

    }
    else
    {
        $('.classification').addClass('d-none');
        $('.pro').removeClass('d-none');
        $('.pro').addClass('d-flex');
    }
});