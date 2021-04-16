$(function(){
    const $start = $('.intro>button');
    const $intro = $('.intro');
    const $main = $('.main');
    const normal = $('.main>.main-map>li>.monster-box>.normal');
    const golden = $('.main>.main-map>li>.monster-box>.golden');
    const kkachil =$('.main>.main-map>li>.monster-box>.kkachil');
    const $ending = $('.ending');
    const $killkko =$('.ending>.point>li>.kko');
    const $killgold =$('.ending>.point>li>.gold');
    const $killkka =$('.ending>.point>li>.kka');
    const $totalscore = $('.ending>.total>.total_score')
    const $score = $('.score');
    const timer = $('.main>.timer>span');
    const coment = $('.main>h2');
    const $replay =$('.ending>.link>li>.replay')
    let monsterIdx = 0;
    let score = 0;
    let normalkey=null;
    let goldenkey=null;
    let kkachilkey=null;
    let gamekey = -1;
    let killkkomul =0;
    let killgolden = 0;
    let killkkachil = 0;

    const $startGame = function(){
        $main.fadeIn(500)
        gamekey = setInterval(function(){
            if(gamekey<34){
                gamekey++;
                timer.text(gamekey-4)
            }else{
                clearInterval(gamekey,kkachilkey,normalkey,goldenkey)
                $main.fadeOut(500)
                $ending.delay(500).fadeIn(500)
                
                $killkko.text(killkkomul)
                $killgold.text(killgolden)
                $killkka.text(killkkachil)
                $totalscore.text(score*100 + '점')
            }
        },1000)
    }

    $start.on('click', function(){
        $intro.fadeOut(500);
        $startGame()
        normalkey = setInterval(function(){
            monsterIdx=Math.floor(Math.random()*10);
            if(normalkey<32){normalkey++;}else{clearInterval(normalkey)}
            normal.css({left:0,'background-image':' url(../images/normal_kkomul_1.png)'}).delay(800).eq(monsterIdx).fadeIn(100).stop().animate({left:86},600).delay(300).fadeOut(200);
        },1200)
        goldenkey = setInterval(function(){
            if(goldenkey<32){goldenkey++;}else{clearInterval(goldenkey)};
            golden.css({left:0,'background-image': 'url(../images/golden-kkomul_1.png'}).delay(1500).eq(monsterIdx).fadeIn(100).stop().animate({left:86},600).delay(300).fadeOut(200);
        },3200)
        kkachilkey = setInterval(function(){
            if(kkachilkey<32){
                kkachilkey++;
            }else{clearInterval(kkachilkey)}
            if(score>9){
            kkachil.css({left:0,'background-image': 'url(../images/kkachil_1.png'}).delay(1000).eq(monsterIdx).fadeIn(100).stop().animate({left:86},600).delay(300).fadeOut(200);
        }},1800)
    });
    
    

    normal.on('click',function(evt){
        evt.preventDefault()
        coment.text('성공이야!! 맛좀봐라~!!')
        score++;
        killkkomul++;
        $score.text(score*100 + '점')
        $(this).css({'background-image':'url(../images/normal_kkomul_3.png)'}).stop().delay(200).fadeOut(300)
    })
    normal.on('mouseover',function(){
        $(this).css({'background-image':'url(../images/normal_kkomul_2.png)'})
    })
    golden.on('click',function(evt){
        evt.preventDefault()
        coment.text('이녀석이 대장이야!! 점수가 쏠쏠하다구~~!!')
        score++;
        score++;
        score++;
        killgolden++;
        $score.text(score*100 + '점')
        $(this).css({'background-image': 'url(../images/golden-kkomul_3.png'}).stop().delay(200).fadeOut(300)
    })
    golden.on('mouseover',function(){
        $(this).css({'background-image':'url(../images/golden-kkomul_2.png)'})
    })
    kkachil.on('click',function(evt){
        evt.preventDefault()
        coment.text('조심해!! 까칠이는 맹독을 가지고 있어!!!')
        score--;
        score--;
        killkkachil++;
        $score.text(score*100 + '점')
        $(this).css({'background-image': 'url(../images/kkachil_3.png'}).stop().delay(200).fadeOut(300)
    })
    kkachil.on('mouseover',function(){
        $(this).css({'background-image':'url(../images/kkachil_2.png)'})
    })
    
    // $replay.on('click',function(evt){
    //     evt.preventDefault();
    //     $ending.fadeOut(500)
    //     clearInterval(gamekey);
    //     $startGame()
    // })

});
