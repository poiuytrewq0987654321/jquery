'use strict';


// efekt hide i show
$('p').hide(3000).show(3000);

// efekt fadeout i fadein
$('h1').fadeOut(3000).fadeIn(3000);

// efekt slidup i slidedown
$('h2').slideUp(3000).slideDown(3000);


// funkcja zwrotna animacji - tzw. callback

function animacja() {
    console.log('zakonczono pierwsza animacje. zaraz startuje druga :)');
    $('h3').animate({'font-size': '1em', 'margin-left': '0px'},2000);
}

//efekt animacji z funkcją zwrotną animacja
$('h3').animate({'font-size': '3em', 'margin-left': '100px'},2000,animacja);
    



















