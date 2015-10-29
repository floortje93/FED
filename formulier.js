//code van www.weggeefcode.nl//

// Het script mag pas uitgevoerd worden wanneer de pagina geladen is.
document.addEventListener("DOMContentLoaded", function (event) {

    //    We slaan de items op in variabelen om ze makkelijker te gebruiken.
    //    Pas hier de #id aan aan de id's van de items die jij gebruikt.
    var button = document.querySelector('#button1');
    var content = document.querySelector('#content1');

    //    We voegen de class .hidden toe aan de #content met javascript.
    //    Als javascript niet beschikbaar is wordt de content dus NIET verborgen.
    content.classList.add('hidden');

    //    Wanneer er op de button geklikt wordt voeren we een functie uit.
    button.addEventListener("click", function () {

        //        We schakelen de class .hidden
        content.classList.toggle('hidden');

    });

    // Als je meerdere knoppen en elementen die verborgen worden toevoegd
    // dan heeft elke knop en elk element een eigen #id nodig.

    // 1. Dupliceer de twee regels die beginnen met var (regel 6 en 7)
    // 2. Pas de variabelen (button/content) en id's (#button/#content) aan
    // 3. Voeg een addEventListener functie toe voor je extra button (regel 14-19), gebruik je eigen button variabele (regel 14)
    // 4. Voer in deze functie de classlist toggle uit op je extra content, gebruik je eigen content variabele (regel 17)



});


// Het script mag pas uitgevoerd worden wanneer de pagina geladen is.
document.addEventListener("DOMContentLoaded", function (event) {

    //    We slaan de items op in variabelen om ze makkelijker te gebruiken.
    //    Pas hier de #id aan aan de id's van de items die jij gebruikt.
    var button = document.querySelector('#button');
    var content = document.querySelector('#content');

    //    We voegen de class .hidden toe aan de #content met javascript.
    //    Als javascript niet beschikbaar is wordt de content dus NIET verborgen.
    content.classList.add('hidden');

    //    Wanneer er op de button geklikt wordt voeren we een functie uit.
    button.addEventListener("click", function () {
        //        Als de button nu aangevinkt is wordt het menu zichtbaar
        //        Anders wordt het menu verborgen
        if (button.checked) {
            content.classList.remove('hidden');

        } else {
            content.classList.add('hidden');
        }
    });
});
