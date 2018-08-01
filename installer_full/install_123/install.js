$(function () {

    $('html').on('submit', 'form[name="connect_db"]', function (event) {
        event.preventDefault();

        var host = $(this).find('input[name="host"]').val();
        var user = $(this).find('input[name="user"]').val();
        var password = $(this).find('input[name="password"]').val();
        var name = $(this).find('input[name="name"]').val();

        $.post('install.php', {
            action: 'connect_db',
            host: host,
            user: user,
            password: password,
            name: name
        }, function (data) {

            if (data.error) {
                $('.connect_db .error').html("<p>Ooops: " + data.error + "</p>").slideToggle();
            }

            if (data.success === true) {
                $('.connect_db').slideToggle();
                $('.create_user').slideToggle();
            }

        }, 'json');
    });


    $('html').on('submit', 'form[name="create_user"]', function (event) {
        event.preventDefault();

        var user_name = $(this).find('input[name="user_name"]').val();
        var user_email = $(this).find('input[name="user_email"]').val();
        var user_password = $(this).find('input[name="user_password"]').val();

        $.post('install.php', {
            action: 'create_user',
            user_name: user_name,
            user_email: user_email,
            user_password: user_password
        }, function (data) {

            if (data.error) {
                $('.create_user .error').html("<p>Ooops: " + data.error + "</p>").slideToggle();
            }

            if (data.success === true) {
                $('.create_user').slideToggle();
                $('.all_done').slideToggle();
            }

        }, 'json');
    });

});