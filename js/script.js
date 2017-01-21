 $(document).ready(function() {
    // var myUL = $('ul');
    // myUL.addClass('khoa').children().css('font-size','35');
    var count =0;
    $('button').on('click', function() {
         count++;
         $('#count').html(count).css('color','red').css('border','0.5px solid red').css('width','1rem').css('border-radius','50%').css('height','1rem').css('text-align','center');
         
    });
 });

 var myLi ='<li>New Line </li>';
 $('ul').append(myLi);

 $('article').children('.opening-line').siblings().css('color','red')
 $('article').children(':last-child').css('color','blue')
 $('.opening-line').next().css('color','black');

//  function shoppingCount() {
//     var count =0;
//     $('button').on('click', function() {
//          count++;
//          $('#count').html(count).css('color','red').css('border','0.5px solid red').css('width','1rem').css('border-radius','50%').css('height','1rem').css('text-align','center');
//     });
//  });
//  }