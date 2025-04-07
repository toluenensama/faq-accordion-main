
import $ from 'jquery';
window.jQuery = window.$ = $;

const minus =  "/assets/images/icon-minus.svg"
const plus = "/assets/images/icon-plus.svg"
const ansOne = $("#faq-ans-1")
const ansTwo = $("#faq-ans-2")
const ansThree = $("#faq-ans-3")
const ansFour = $("#faq-ans-4")

$(window).on("load", () =>{
    ansOne.hide();
    ansTwo.hide();
    ansThree.hide();
    ansFour.hide();
});



$("#quest-one").on("click",()=>{
    $("#faq-ans-1").fadeToggle();
    toggleIcon("icon-1");


});

$("#quest-two").on("click",()=>{
    $("#faq-ans-2").fadeToggle();
    toggleIcon("icon-2");

});

$("#quest-three").on("click",()=>{
    $("#faq-ans-3").fadeToggle();
    toggleIcon("icon-3");
});

$("#quest-four").on("click",()=>{
    $("#faq-ans-4").fadeToggle();
    toggleIcon("icon-4");
});

function toggleIcon(icon) {
    let $icon = $("#" + icon);
    let currentSrc = $icon.attr("src")

    if (currentSrc === minus) {
        $icon.attr("src",plus); 
    } else {
        $icon.attr("src",minus); 
    };
}