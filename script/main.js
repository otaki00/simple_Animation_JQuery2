// $('button').click(function(){
//     $(".main").hide(2000);//used to hide 
// })//this is hide element by jquery 

// now with core js 
// let div = document.getElementById('main')
// div.style.width ='0';
// div.style.height = '0';
// div.style.opacity = '0';
// div.style.transition = 'all 5s ease-in';


// add two events to one click
// $('button').click(function (){
//     $('.main').hide(5000)
// })

// $('button').click(function (){
//     alert('hi from jquery')
// })

// when click show div
// $('button').click(function(){
//     $('.main').slideUp(2000)
// })

// 1-show element
// 2-slideUp
// 3-fadeIn
// for the same element
// $('button').click(function(){
//     let div = $('.main')
//     // div.show(5000)
//     // div.slideUp(5000)
//     // div.fadeIn(5000)
//     // or can use chaining way
//     div.show(5000).fadeIn(5000).slideUp(5000)
// })

// hide more than element in the same time
// $('button').click(function(){
//     $('.main').hide(5000)
//     $('.main1').hide(5000)
//     $('.main2').hide(5000)
// })

// hide more than element in specific order 
// use (call back : it's call function inside function)
// $('button').click(function(){
//     $('.main').toggle(5000,function(){
//         $('.main1').toggle(5000,function(){
//             $('.main2').toggle(5000)
//         })
//     })
// })

// animation 
// $('button').click(function(){
//         $('.main').animate({width:'+=20px',//that means in every click add 20px
//         height:'+=20px'}
//         ,3000)
//     })

// make moves work in order not in the same time
$('button').click(function(){
    let div = $('.main')
    // regular way
    // div.animate({width:'+=30px'},3000)
    // div.animate({height:'+=30px'},3000)
    // div.animate({borderRadius:'50%'},3000)

    //or (chaining way)
    div.animate({width:'+=30px'},3000).animate({height:'+=30px'},3000).animate({borderRadius:'50%'},3000)
    })

    // Note : if i work with deffrente elements and need
    //  them to wait each other use (call back)
    // else use regular way