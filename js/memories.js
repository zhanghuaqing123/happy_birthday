$(function(){
    // 选项卡交互功能
    $('.choice-btn').on('click', function() {
        var choice = $(this).data('choice');
        var resultText = '';
        
        if (choice === 'yes') {
            resultText = '太好了！我们一起创造更多美好回忆吧！💕';
        } else if (choice === 'very-yes') {
            resultText = '哇！你的回答让我心花怒放！我们永远在一起！💖✨';
        }
        
        // 隐藏选择按钮
        $('.choice-container').fadeOut(300);
        
        // 显示结果
        setTimeout(function() {
            $('.result-text').text(resultText);
            $('.choice-result').addClass('show');
            
            // 创建爱心飘浮效果
            createFloatingHearts();
        }, 500);
    });
    
    // 爱心飘浮动画函数
    function createFloatingHearts() {
        for (var i = 0; i < 10; i++) {
            setTimeout(function() {
                var heart = $('<div class="floating-heart">💖</div>');
                heart.css({
                    left: Math.random() * window.innerWidth + 'px',
                    top: window.innerHeight - 50 + 'px'
                });
                $('body').append(heart);
                
                // 2秒后移除元素
                setTimeout(function() {
                    heart.remove();
                }, 2000);
            }, i * 200);
        }
    }

    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
// loadAudioFile('music/1.mp3');
