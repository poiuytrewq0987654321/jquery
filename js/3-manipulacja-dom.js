'use strict';

jQuery( document ).ready( function(){
    //pobieranie tekstu elementu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    //dodawanie tekstu
    $('.paragraf').text(tekstParagrafuPierwszego);
    
    //dodawanie html
    $('.paragrafnext').html('To jest <strong>paragraf</strong> z dodanym <br> HTML poprzez jQuery');
    
    //dodanie treści na końcu selektora
    $('.paragrafnext').append('Treść na końcu selektora');
    
    //dodanie treści za selektorem
    $('.paragrafnext').after('Treść za selektorem');
    
    //usuwanie elementu i jego zawartości 
    $('strong').remove();
    
    //usuwanie tylko jego zawartości
    $('.paragraf').empty();
    
    //dodawanie CSS
    $('.paragrafnext').css({'font-size':'3em', 'color':'red'});
    
    //dodawanie klasy
    $('h1').addClass('blue');
    
    //dodawanie atrybutu
    $('h1').attr('imie','Marcin');
    
})