let count = 0;
let inc = 0;
let margin = 0;
let slider = document.getElementsByClassName("slider-width");
let itemDisplay = 0;

console.log("slider", slider)

async function latesBlogs() {

    let url = `https://eboe.no/eboe/wp-json/wp/v2/posts?per_page=12`;
    const sliderContainer = document.querySelector(".slider-width");

    try {

        const response = await fetch(url);
        const posts = await response.json();

        sliderContainer.innerHTML = "";

        posts.forEach(post => {

            postTitle = post.slug;
            postContent = post.content.rendered;
            featuredImg = post.better_featured_image.media_details
            time = post.modified
            sliderContainer.innerHTML += `<div class="item">
           
            <a href="blog_specific.html?id=${post.id}"><h2>${postTitle}</h2><img src="${post.better_featured_image.source_url}" 
            alt="${post.better_featured_image.alt_text}"></a>  
        </div>`
        });
    } catch (error) {
    }


    for (let i = 0; i < item.length; i++) {
        let itemSlide = Math.floor(item.length / itemDisplay) - 1;

        console.log("itemleft", itemleft)

        item[i].style.width = (screen.width / itemDisplay) - margin + "px"
        item[i].style.margin = `0 ${margin / 2}px`

    }
}



latesBlogs()


if (screen.width > 990) {
    itemDisplay = document.getElementsByClassName("slider-width")[0].getAttribute("item-display-d");
    console.log("thiiis", itemDisplay)
    margin = itemDisplay * 5;
} else if (screen.width > 700 && screen.width < 990) {
    itemDisplay = document.getElementsByClassName("slider-width")[0].getAttribute("item-display-t")
    margin = itemDisplay * 6.8;
} else {
    (screen.width > 285 && screen.width < 700)
    itemDisplay = document.getElementsByClassName("slider-width")[0].getAttribute("item-display-m")
    margin = itemDisplay * 20;
}

console.log("thiiis", itemDisplay)

let item = document.getElementsByClassName("item");
let itemleft = item.length % itemDisplay;

let itemSlide = Math.floor(item.length / itemDisplay) - 1;



let buttons = document.querySelectorAll(".btn")



function prev() {
    let slider = document.getElementsByClassName("slider-width")[0];
    if (inc !== 0) {
        if (inc === itemleft) {
            inc = inc - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        } else {
            inc--;
            count = count + screen.width;
            slider.style.left = count + "px";
        }
        if (buttons[0]) {
            buttons[1].disabled = false;
        }
    }
}



function next() {
    let slider = document.getElementsByClassName("slider-width")[0];
    if (inc !== itemSlide + itemleft) {
        if (inc === itemSlide) {
            inc = inc + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        } else {
            inc++;
            count = count - screen.width;
        }
        slider.style.left = count + "px";

        let lastItemIndex = (inc + 1) * itemDisplay - 1;
        if (lastItemIndex >= item.length - 1) {
            buttons[1].disabled = true;
        }

    }
}
