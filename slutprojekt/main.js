function nav(){

    document.querySelector("nav").classList.toggle("hidden");
}

        // function togglemenu(){
        //     document.querySelector("nav").classList.toggle("hidden")
        // }
// Skapar en tom varukorg (lista)
let cart = [];

// Funktion som körs när man klickar på knappen
function addToCart(name = "TEST", price = 123) {

    // Skapar ett objekt (produkt)
    let product = {
        name: name,
        price: price
    };

    // Lägger till produkten i listan
    cart.push(product);

    // Visar i console (för test)
    console.log(cart);

    // Enkel feedback till användaren
    alert(name + " lades till i varukorgen! Kostnad: "+price );
}
