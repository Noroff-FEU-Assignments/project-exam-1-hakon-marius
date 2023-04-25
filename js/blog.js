const blogContainer = document.querySelector("#blogContainer");

async function getBlogData(numberOfPosts) {

    let url = `https://eboe.no/eboe/wp-json/wp/v2/posts?per_page=${numberOfPosts}`;


    try {

        const response = await fetch(url);
        const posts = await response.json();

        blogContainer.innerHTML = "";

        posts.forEach(post => {

            postTitle = post.title.rendered;
            postContent = post.content.rendered;
            featuredImg = post.better_featured_image.media_details
            time = post.date




            /*
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(post.content.rendered, "text/html");
                        const img = doc.querySelector(".wp-block-image");
        



            blogContainer.innerHTML +=
                /*
                                `<div class="singlepost"><h2>${postTitle}</h2><img src="${img.outerHTML}</p>${post.excerpt.rendered}</p><div class="read-more-button-container">
                                                        <a href="blog_specific.html?id=${post.id}" class="singlepost"><h2 class="read-more">Read article</h2><a/></div></div>
                                                        `
                */


            blogContainer.innerHTML +=


                `<div class="singlepost"><h2>${postTitle}</h2><img src="${post.better_featured_image.source_url}" 
            alt="${post.better_featured_image.alt_text}"></p>${post.excerpt.rendered}</p><div class="read-more-button-container">
            <a href="blog_specific.html?id=${post.id}" class="singlepost"><h2 class="read-more">Read article</h2><a/></div>
            `


        });


        blogContainer.innerHTML += `<div class="read-more-button-container"><button onclick="getBlogData(20)"class="View_more_Posts" id="View_more_Posts">View More Posts</button></div>`;


        //removes the button if there is more than 10 posts
        const button = document.querySelector(".View_more_Posts");
        if (numberOfPosts === 10) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    } catch (error) {
        blogContainer.innerHTML = error;
    }
}
function fetchPosts(numberOfPosts) {
    getBlogData(numberOfPosts);

}
getBlogData(10)





const menuCheckbox = document.querySelector("#menu-checkbox");
const body = document.querySelector("body");

menuCheckbox.addEventListener("change", function () {
    if (menuCheckbox.checked) {
        body.classList.add("burgerMenu");
    } else {
        body.classList.remove("burgerMenu");
    }
});

//Loader
window.addEventListener("load", function () {
    const loading = document.querySelector(".loading");
    loading.classList.add("hide-loader");
    loading.addEventListener("transitioned", function () {
        document.body.removechild(loading);
    })
});
