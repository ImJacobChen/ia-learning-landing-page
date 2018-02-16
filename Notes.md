### Resilia link brochure link: http://unicorntraining.com/uploads/docs/RESILIA_Product_Brochure-v1.0.pdf


## Old nav overlay html
```
<div class="overlay-menu">
    <div class="overlay-menu__top">
        <a class="overlay-menu__top__ia-website-link" href="https://www.theinvestmentassociation.org">
            <img src="/images/ia-website-link.svg" alt="Invesment association link">
        </a>
    </div>
    <div class="overlay-menu__content">
        <button class="overlay-menu__close-button"></button>

        <a class="overlay-menu__link" href="#">Why IA Learning?</a>
        <a class="overlay-menu__link" href="#">Compliance-Serve</a>
        <a class="overlay-menu__link" href="#">Cyber Security Training</a>
        <a class="overlay-menu__link" href="#">GCHQ Certified Training</a>
        <a class="overlay-menu__link" href="#">Free trial</a>

        <ul>
            <li><a href="#">Event schedule ></a></li>
            <li><a href="#">Training schedule ></a></li>
            <li><a href="#">Webinar schedule ></a></li>
            <li><a href="#">Join the IA ></a></li>
        </ul>

        <div class="overlay-menu__social-icons">
            <a class="overlay-menu__social-icon" href="#"><img src="/images/icons/facebook-icon.svg" alt="Facebook icon"></a>
            <a class="overlay-menu__social-icon" href="#"><img src="/images/icons/twitter-icon.svg" alt="Twitter icon"></a>
            <a class="overlay-menu__social-icon" href="#"><img src="/images/icons/linkedin-icon.svg" alt="Linkedin icon"></a>
        </div>
    </div>
</div>

<div class="nav__bottom">
    <!-- <a class="nav__bottom__free-trial-link" href="#">Free trial</a> -->

    <button class="nav__bottom__menu-button"></button>
</div>
```

## To toggle the .dropdowns from being static to extending the elements around them.
Change
```
//components/_dropdowns.scss

@media screen and (min-width: $tablet) {
    .dropdown {
        height: 180px;
    }
}
```
to
```
//components/_dropdowns.scss

@media screen and (min-width: $tablet) {
    .dropdown__main {
        height: 180px;
    }
}
```

## Old carousel html & css
```
<div class="carousel__slide">
    <div class="carousel__slide__top">
        <img src="images/banner1.jpg" alt="Learning" class="carousel__slide-image">
        <img src="images/banner1-mobile.jpg" alt="Learning" class="carousel__slide-image--mobile">
        <h5 class="carousel__slide-title">Welcome to the IA Learning portal</h5>
    </div>
    <div class="carousel__slide__bottom">
        <p class="carousel__slide-subtext">IA LEARNING is the new home of eLearning for the investment management industry</p>
    </div>
</div>

.carousel__slide-title {
    width: 80%;
    position: absolute;
    left: 19px;
    bottom: 19px;
    z-index: 2;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
}

.carousel__slide__bottom {
    background: $mint-green;
    padding: 8px 19px;
}

.carousel__slide-subtext {
    color: $navy;
    margin: 0;

    a {
        color: $navy;
    }
}

@media screen and (min-width: $tablet) {
    .carousel__slide-title {
        max-width: 90%;
        left: 118px;
        bottom: 19px;
        font-size: 42px;
    }

    /* Slide bottom */
    .carousel__slide__bottom {
        padding: 8px 123px;
    }

    .carousel__slide-subtext {
        font-size: 24px;
    }
}

@media screen and (min-width: $desktop) {
    .carousel__slide-title {
        font-size: 76px;
    }
}
```