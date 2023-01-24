"use strict";

$(document).ready(() => {
    $.post('https://k1ywrf8h8e.execute-api.us-east-1.amazonaws.com/Prod/visit')
    .done(visitor_counter => {
        $('#loader').hide();
        $('#visits').text(visitor_counter);
    })
    .fail(e => {
        console.log('Error: ');
        console.log(e);
    });
});