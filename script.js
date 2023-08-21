"use strict";


function startGame() {


    let score = 0;

    function hideMole(mole) {

        mole.stop().animate({bottom: '-100px'}, 300);


    }

    function showMole() {

        let holes = $('.hole');
        let randomHole = $(holes[Math.floor(Math.random() * holes.length)]);

        let mole = randomHole.find('.mole');

        mole.stop().animate({bottom: '0'}, 300);

        setTimeout(function () {
            hideMole(mole);


        }, 1000);

        setTimeout(showMole, 1500);


    }

    $('.mole').click(function () {
        let mole = $(this);
        hideMole(mole);
        score += 1;
        $('#score').text(score);


    });

    setTimeout(showMole, 500);


}


$(document).ready(function () {

    $('#start-button').click(function () {

        $(this).prop('disabled', true);

        startGame();
    })


});










