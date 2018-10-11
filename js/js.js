// "чистый" js
// "use strict"
// var containerWindow = document.querySelector('.select');
// var listWindows = document.querySelectorAll('.select li');
// var listWindowName = ["Ирландский дуб","Вишня","Макоре","Липа","Амарант","Берлиния","Габон"];
// var windowExample = document.querySelector('.first-block img');
// var exampleName = document.querySelector('.first-block p');
// var removeClassCheck = function (array) {
//     for (var i = 0; i < array.length; i++){
//         array[i].classList.remove('check');
//     }
// };
//
// containerWindow.addEventListener('click', function(event){
//     var target = event.target;
//     if(target.tagName != "LI"){
//         return; }
//     else {
//         var numberWindow = target.id;
//         removeClassCheck(listWindows);
//         listWindows[numberWindow - 1].classList.add('check');
//         exampleName.textContent = listWindowName[numberWindow - 1];
//         if (numberWindow == 1){
//             windowExample.src = "png/example_"+numberWindow+".jpg";
//         } else {
//             windowExample.src = "png/example_"+numberWindow+".png";
//         }
//     }
// });


// jQuery
var listWindowName = ["Ирландский дуб","Вишня","Макоре","Липа","Амарант","Берлиния","Габон"];
$(document).ready(
    $('.select>li').click(function (event) {
        $('.select>li').removeClass('check');
        $(this).addClass('check');
        $(".first-block>p").html(listWindowName[event.target.id - 1]);
        if(event.target.id == 1){
            $('.first-block>img').attr("src","png/example_"+event.target.id+".jpg");
        } else {
            $('.first-block>img').attr("src","png/example_"+event.target.id+".png");
        }

    })
);