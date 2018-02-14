function initDropdowns() {
    // Main button
    $('.dropdown__main').on('click', function() {
        var dropdownContent = $(this).next('.dropdown__content');
        dropdownContent.toggleClass('active');

        if (dropdownContent.hasClass('active')) {
            $(this).find('.dropdown__main__button').text('See less >');
        } else {
            $(this).find('.dropdown__main__button').text('See more >');
        }
    });

    // Content button
    $('.dropdown__content__button').on('click', function() {
        var dropdownContent = $(this).parent();
        dropdownContent.toggleClass('active');

        if (dropdownContent.hasClass('active')) {
            $(this).parent().prev('.dropdown__main').find('.dropdown__main__button').text('See less >');
        } else {
            $(this).parent().prev('.dropdown__main').find('.dropdown__main__button').text('See more >');
        }
    });

    // Gif animations
    var dropdown1HasBeenActivated = false;
    new Waypoint({
        element: document.getElementById('dropdown1'),
        handler: (function(direction) {
            if (direction = 'down' && !dropdown1HasBeenActivated) {
                var dropdownMainLeft = this.element.getElementsByClassName('dropdown__main__left')[0];
                var img = document.createElement('img');
                img.className = 'dropdown__main__left__image';
                img.src = '/images/gifs/thinking-man.gif';
                img.alt = 'Thinking man';

                dropdownMainLeft.appendChild(img);
                this.enabled = false;
                dropdown1HasBeenActivated = true;
            }
        }),
        offset: '78%',
    });
    $('#dropdown1').mouseenter(function() {
        var dropdownMainLeft = this.getElementsByClassName('dropdown__main__left')[0];
        if (dropdownMainLeft.getElementsByClassName('dropdown__main__left__image')[0]) {
            dropdownMainLeftImage = dropdownMainLeft.getElementsByClassName('dropdown__main__left__image')[0]
            dropdownMainLeftImage.src = '/images/gifs/thinking-man.gif';
            dropdown1HasBeenActivated = true;
        } else {
            var img = document.createElement('img');
            img.className = 'dropdown__main__left__image';
            img.src = '/images/gifs/thinking-man.gif';
            img.alt = 'Thinking man';

            dropdownMainLeft.appendChild(img);
            dropdown1HasBeenActivated = true;
        }
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
    $('#dropdown2').mouseenter(function() {
        var dropdownMainLeft = this.getElementsByClassName('dropdown__main__left')[0];
        if (dropdownMainLeft.getElementsByClassName('dropdown__main__left__image')[0]) {
            dropdownMainLeftImage = dropdownMainLeft.getElementsByClassName('dropdown__main__left__image')[0]
            dropdownMainLeftImage.src = '/images/gifs/cogs.gif';
            dropdown1HasBeenActivated = true;
        } else {
            var img = document.createElement('img');
            img.className = 'dropdown__main__left__image';
            img.src = '/images/gifs/cogs.gif';
            img.alt = 'Machine cogs';

            dropdownMainLeft.appendChild(img);
            dropdown1HasBeenActivated = true;
        }
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
    $('#dropdown3').mouseenter(function() {
        var dropdownMainLeft = this.getElementsByClassName('dropdown__main__left')[0];
        if (dropdownMainLeft.getElementsByClassName('dropdown__main__left__image')[0]) {
            dropdownMainLeftImage = dropdownMainLeft.getElementsByClassName('dropdown__main__left__image')[0]
            dropdownMainLeftImage.src = '/images/gifs/security.gif';
            dropdown1HasBeenActivated = true;
        } else {
            var img = document.createElement('img');
            img.className = 'dropdown__main__left__image';
            img.src = '/images/gifs/security.gif';
            img.alt = 'Cyber security';

            dropdownMainLeft.appendChild(img);
            dropdown1HasBeenActivated = true;
        }
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
    $('#dropdown4').mouseenter(function() {
        var dropdownMainLeft = this.getElementsByClassName('dropdown__main__left')[0];
        if (dropdownMainLeft.getElementsByClassName('dropdown__main__left__image')[0]) {
            dropdownMainLeftImage = dropdownMainLeft.getElementsByClassName('dropdown__main__left__image')[0]
            dropdownMainLeftImage.src = '/images/gifs/awards.gif';
            dropdown1HasBeenActivated = true;
        } else {
            var img = document.createElement('img');
            img.className = 'dropdown__main__left__image';
            img.src = '/images/gifs/awards.gif';
            img.alt = 'Award badges';

            dropdownMainLeft.appendChild(img);
            dropdown1HasBeenActivated = true;
        }
    });
}