function initDropdowns() {
    $('.dropdown__main__button').on('click', function() {
        var parent = $(this).parent().next('.dropdown__content');
        parent.toggleClass('active');

        if (parent.hasClass('active')) {
            $(this).text('See less >');
        } else {
            $(this).text('See more >');
        }
    });

    $('.dropdown__content__button').on('click', function() {
        $(this).parent('.dropdown__content').toggleClass('active');
    });
}