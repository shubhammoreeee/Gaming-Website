// $(document).ready(function() {
//     $(".navbar-burger").click(function() {
//         $(".navbar-burger").toggleClass("is-active");
//         $(".navbar-menu").toggleClass("is-active");
//     });
// });


// $('.tabs li a').on('click', function(e){
//     e.preventDefault();
//     $($(this).attr('href')).parent('.tab-contents').find('.tab-content').removeClass('is-active');
//     $($(this).attr('href')).addClass('is-active');
//     $(this).parents('.tabs').find('li').removeClass('is-active');
//     $(this).parent('li').addClass('is-active');
// })
// $('.cs-tabs li').on('click', function(e){
//     e.preventDefault();
//     $($(this).data('target')).parent('.cs-tab-contents').find('.cs-tab-card').removeClass('is-active');
//     $($(this).data('target')).addClass('is-active');
//     $(this).parent('.cs-tabs').find('li').removeClass('is-active');
//     $(this).addClass('is-active');
//     console.log($(this).data('target'))
// })

// function sendContact(){
    // Email.send({
    //     SecureToken: '7ed7e969-9ceb-478d-bdbe-d2c1afd2666b',
    //     To: 'hemantkumar671@gmail.com',
    //     From: 'play.zuke@gmail.com',
    //     Subject: document.etElementById('subject').value,
    //     Body : "Fullname: " + document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value
    //     + "<br> Email: " + document.etElementById('email').value
    //     + "<br> Email: " + document.etElementById('subject').value
    //     + "<br> Email: " + document.etElementById('message').value
    // }).then(
    //     message => alert(message)
    // );

//     Email.send({
//         SecureToken : "7ed7e969-9ceb-478d-bdbe-d2c1afd2666b",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//         message => alert(message)
//     );
// }
