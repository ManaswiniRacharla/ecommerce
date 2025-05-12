let card=document.querySelector(".trend");
let card2=document.getElementById("trendSec");
let mainPage=document.querySelector(".main");
let blogcard=document.querySelector(".trends");
let aboutt=document.querySelector(".about");
let contact=document.querySelector(".contact");

function homes(){
    blogcard.style.display="block";
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    aboutt.style.display="none";
    contact.style.display="none";
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="pueple";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";

}

function shops(){
    mainPage.style.display="none";
    blogcard.style.display="none";
    aboutt.style.display="none";
    card.style.display="block";
    card2.style.display="block";
    contact.style.display="none";
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="purple";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blogcard.style.display="block";
    aboutt.style.display="none";
    contact.style.display="none";
    document.getElementById("blog").style.color="purple";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blogcard.style.display="none";
    aboutt.style.display="block";
    contact.style.display="none";
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="purple";

}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blogcard.style.display="none";
    aboutt.style.display="none";
    contact.style.display="block";
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="purple";
    document.getElementById("about").style.color="none";

}

function show(img){
    let newImg=document.getElementById("newImg");
    newImg.src=img.src;
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blogcard.style.display="none";
    aboutt.style.display="none";
    contact.style.display="none";
    document.querySelector(".cart").style.display="flex";
}
function back() {
    // Hide the cart section
    document.querySelector(".cart").style.display = "none";
    // Show the main sections again
    homes();
}

function addCart() {
    alert("Added To Cart");
    // Reset the view to home or a specific page
    homes();
}

// Attach event listener for the Back button
document.querySelector(".back").addEventListener("click", back);

// Attach event listener for the Add to Cart button
document.querySelector(".cartText button:nth-of-type(2)").addEventListener("click", addCart);
