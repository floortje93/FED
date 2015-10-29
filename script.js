//code voor hambugermenu//
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




});
