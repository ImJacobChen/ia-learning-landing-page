##Old nav overlay html
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