// $(function(){
//   $('.box1').css({
//     'background-color': '#000',
//     'height': '100px'
//   });
// })

// 上から下にスライドさせる（表示する）
// $(function(){
//   $('.box1').slideDown();
// });

// 下から上にスライドさせる（隠す）
// $(function(){
//   $('.box1').slideUp();
// });

// 非表示の要素を、jQueryで表示させる
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#000'});
// });

// 表示されている要素を、jQueryで非表示にする
// $(function(){
//   $('.box1').hide();
// })

$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#777',
      'width': '200px',
      'height': '100px'
      // 引数に数字を入れることで、時間を指定可能（ミリ秒なので、1000で１秒）
    }).slideUp(3000);
  });
});