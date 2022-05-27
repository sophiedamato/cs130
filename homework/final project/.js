
function copyAnim(){
    ScrollReveal().reveal(".the_essentials", {delay: 200, distance: "500px", origin:"left"});
    ScrollReveal().reveal(".secondhand_trends", {delay: 400, distance: "500px", origin:"left"});
    ScrollReveal().reveal(".ethics", {delay: 200, distance: "500px", origin:"left"});
    ScrollReveal().reveal(".what_next", {delay: 400, distance: "1000px", origin:"top"});
   }
   
   
copyAnim();



/** Interactive Element – Timeline Map */
const date_buttons = document.getElementsByName("date-button")
const photo = document.querySelector("#timeline_map")

function change_date(date) {
    photo.src = "images/" + date + ".png"
}

date_buttons.forEach(button => {
    button.addEventListener("change", event =>{
        change_date(button.value)
    })
})


// /** Interactive Element - Outfit Slideshow */
 
// function opendrawer1(){
//     TweenLite.to($('.iv_infocard') , {autoAlpha: 1, display:'inline-block'});
// }

// function opendrawer2(){
//     TweenLite.to($('.ho_infocard'), {autoAlpha: 1, display:'inline-block'});
// }

// function opendrawer3(){
//     TweenLite.to($('.wl_infocard'), {autoAlpha: 1, display:'inline-block'});
// }

// function opendrawer4(){
//     TweenLite.to($('.rv_infocard'), {autoAlpha: 1, display:'inline-block'});
// }