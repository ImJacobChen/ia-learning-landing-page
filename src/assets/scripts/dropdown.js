function initDropdowns() {
    $('.dropdown__main').on('click', function() {
        var dropdownContent = $(this).next('.dropdown__content');
        dropdownContent.toggleClass('active');

        if (dropdownContent.hasClass('active')) {
            $(this).find('.dropdown__main__button').text('See less >');
        } else {
            $(this).find('.dropdown__main__button').text('See more >');
        }
    });

    $('.dropdown__content__button').on('click', function() {
        var dropdownContent = $(this).parent();
        dropdownContent.toggleClass('active');

        if (dropdownContent.hasClass('active')) {
            $(this).parent().prev('.dropdown__main').find('.dropdown__main__button').text('See less >');
        } else {
            $(this).parent().prev('.dropdown__main').find('.dropdown__main__button').text('See more >');
        }
    });

    new Waypoint({
        element: document.getElementById('dropdown1'),
        handler: (function(direction) {
            if (direction = 'down') {
                var dropdownMainLeft = this.element.getElementsByClassName('dropdown__main__left')[0];
                var img = document.createElement('img');
                img.className = 'dropdown__main__left__image';
                img.src = '/images/gifs/thinking-man.gif';
                img.alt = 'Thinking man';

                dropdownMainLeft.appendChild(img);
                this.enabled = false;
            }
        }),
        offset: '78%',
    });

    new Waypoint({
        element: document.getElementById('dropdown2'),
        handler: (function(direction) {
            if (direction = 'down') {
                var dropdownMainLeft = this.element.getElementsByClassName('dropdown__main__left')[0];
                var img = document.createElement('img');
                img.className = 'dropdown__main__left__image';
                img.src = '/images/gifs/cogs.gif';
                img.alt = 'Machine cogs';

                dropdownMainLeft.appendChild(img);
                this.enabled = false;
            }
        }),
        offset: '78%'
    });

    new Waypoint({
        element: document.getElementById('dropdown3'),
        handler: (function(direction) {
            if (direction = 'down') {
                var dropdownMainLeft = this.element.getElementsByClassName('dropdown__main__left')[0];
                var img = document.createElement('img');
                img.className = 'dropdown__main__left__image';
                img.src = '/images/gifs/security.gif';
                img.alt = 'Cyber security';

                dropdownMainLeft.appendChild(img);
                this.enabled = false;
            }
        }),
        offset: '78%'
    });

    new Waypoint({
        element: document.getElementById('dropdown4'),
        handler: (function(direction) {
            if (direction = 'down') {
                var dropdownMainLeft = this.element.getElementsByClassName('dropdown__main__left')[0];
                var img = document.createElement('img');
                img.className = 'dropdown__main__left__image';
                img.src = '/images/gifs/awards.gif';
                img.alt = 'Award badges';

                dropdownMainLeft.appendChild(img);
                this.enabled = false;
            }
        }),
        offset: '78%'
    });
}