//js
$('input').blur(function () {
    document.body.scrollTop = $('.sumPage').offset().scrollHeight;
})
$(function () {
    $('#reset').on('click', function () {
        $('#numInput').val('');
        console.log(countInput);
        if ($('#countInput').val() === '18000') {
            return
        } else {
            $('#countInput').val('');
        }
    })
    $('#sum').on('click',function () {
        if($('#numInput').val() == '' || $('#countInput').val() == ''){
            $('.alert-tip').addClass('active');
            setTimeout(function () {
                $('.alert-tip').removeClass('active');
            },2000)
            return false
        }
        $('.result').toggleClass('active');
        var numInput = $('#numInput').val();
        var countInput = $('#countInput').val();
        var outTimeResult = numInput * countInput * 0.388;
        var firstTimeResult = numInput * countInput * 0.0026;
        var saveCount = outTimeResult - firstTimeResult;
        var saveTipCount = parseInt(saveCount/26);
        $('.outTimeResult').html(outTimeResult.toFixed(2));
        $('.firstTimeResult').html(firstTimeResult.toFixed(2));
        $('.save__content').html(saveCount.toFixed(2));
        $('.save__tip__count').html(saveTipCount.toFixed(2));
        $('.save_pecent').html((parseFloat(saveCount/outTimeResult)*100).toFixed(1) +'%' || '0.0%');
    })
    $('.back').on('click',function(){
        $('.result').toggleClass('active');
    })
})

//style.less
require('../../css/bootstrap.min.css');
require('../../css/animate.css');
require('../../less/style.less');
