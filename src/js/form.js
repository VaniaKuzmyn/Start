"use strict";

$(document).ready(function () {

    $("#form").on("submit", function (event) {
        event.preventDefault();

        var email = $('.form-email').val();
        var password = $('.form-password').val();
        var name = $('.form-name').val();
        var phone = $('.form-phone').val();
        var message = $('.form-message').val();

        var jqxhr = $.post('build/php/form.php', { 'email': email,'password': password, 'name': name, 'phone': phone, 'message': message });

        jqxhr.done(function (data) {
            Console.log(data);
        });
        jqxhr.fail(function (xhr, status, errorThrown) {
            Console.log(status + errorThrown);

        });
    })
    


})