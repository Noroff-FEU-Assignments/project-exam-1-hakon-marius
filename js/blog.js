const blogContainer = document.querySelector("#blogContainer");
const button = document.querySelector(".View_more_Posts");

/*
let url = 'https://eboe.no/eboe/wp-json/wp/v2/posts?per_page=10';

const buttons = document.querySelectorAll(".View_more_Posts");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        console.log("green")

        if (url == 'https://eboe.no/eboe/wp-json/wp/v2/posts/')


            getBlogData(url);

    });

});*/


async function getBlogData(newUrl) {

    let url = 'https://eboe.no/eboe/wp-json/wp/v2/posts?per_page=10';


    try {

        const response = await fetch(url);
        const posts = await response.json();

        posts.forEach(post => {

            postTitle = post.slug;
            postContent = post.content.rendered;
            featuredImg = post.better_featured_image.media_details
            time = post.modified

            blogContainer.innerHTML +=
                `<a href="blog_specific.html?id=${post.id}" class="singlepost"><h2>${postTitle}</h2><img src="${post.better_featured_image.source_url}" 
                alt="${post.better_featured_image.alt_text}"><p>Updated ${time}</p>${post.excerpt.rendered}</p><div>
                <h2 class="read-more">Read article</h2></div>
                `

        });
    } catch (error) {
        blogContainer.innerHTML = error;
    }

}

getBlogData()

const menuCheckbox = document.querySelector("#menu-checkbox");
const body = document.querySelector("body");

menuCheckbox.addEventListener("change", function () {
    if (menuCheckbox.checked) {
        body.classList.add("burgerMenu");
    } else {
        body.classList.remove("burgerMenu");
    }
});

