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