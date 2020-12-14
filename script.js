$('.page-scroll').on('click',function(e){


    console.log('ok');

    // ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemenn 
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 750,'swing');


    e.preventDefault();


});
