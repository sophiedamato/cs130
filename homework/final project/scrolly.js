const scrollElements = document.querySelectorAll(".scroll-element");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } 
        else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", handleScrollAnimation);

//hopefully this will be a photo carousel?//
let currentIndex = 0; 

const images = [
    'BadRiver5_13-23.jpg',
    'BadRiver5_13-24.jpg',
    'BadRiver5_13-27.jpg',
    'BadRiver5_13-30.jpg',
    'BadRiver5_13-12.jpg',
    'BadRiver5_13-34.jpg',
    'BadRiver5_13-05.jpg',
    'BadRiver5_13-19.jpg',
    'BadRiver5_13-13.jpg',
    'BadRiver5_13-10.jpg',
    'BadRiver5_13-09.jpg',
    'BadRiver5_13-08.jpg',
    'BadRiver5_13-34.jpg',
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.preview_box').innerHTML += `
        <li class="card">
            <button class="image" 
            onclick="handleThumbnailClick(event)"
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};


const handleThumbnailClick = (ev) => { 
    console.log(ev);
   const elem = ev.currentTarget;
   console.log(elem.style.backgroundImage);
   const bgImage = elem.style.backgroundImage;
   document.querySelector('.featured_image').style.backgroundImage = bgImage;
}
// Create  a function that handles previous and one that handles next

const previous = (event) => { 
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = 12;
    }
    console.log("currentIndex", currentIndex);
    console.log('show previous image', currentIndex);
    console.log(images[currentIndex]); 
    document.querySelector('.featured_image').style.backgroundImage = `url(${images[currentIndex]})`;
}
const next = (event) => {
    if (currentIndex < 12) {
        currentIndex += 1;
    } else { 
        currentIndex = 0;
    }
    console.log('show next image', currentIndex);
    console.log(images[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = `url(${images[currentIndex]})`;
}

// initScreen();