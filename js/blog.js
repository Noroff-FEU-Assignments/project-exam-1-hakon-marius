const blogContainer = document.querySelector("#blogContainer");
const button = document.querySelector("#searchBlog");


async function getBlogData(numberOfPosts) {



    const searchvar = searchfield.value.toLowerCase();

    let url = `https://eboe.no/eboe/wp-json/wp/v2/posts?per_page=${numberOfPosts}`;

    if (searchvar !== "") url = url + `&search=${searchvar}`;

    try {

        const response = await fetch(url);
        const posts = await response.json();

        blogContainer.innerHTML = "";

        posts.forEach(post => {

            postTitle = post.title.rendered;
            postContent = post.content.rendered;
            featuredImg = post.better_featured_image.media_details
            time = post.date

            if (postTitle.toLowerCase().indexOf(searchfield.value.toLowerCase()) > -1 || searchfield.value.toLowerCase() == "") {
                blogContainer.innerHTML += `<div class="singlepost"><h2>${postTitle}</h2><img src="${post.better_featured_image.source_url}" 
                alt="${post.better_featured_image.alt_text}"></p>${post.excerpt.rendered}</p><div class="read-article-button-container">
                <a href="blog_specific.html?id=${post.id}" class="singlepost"><h2 class="read-article">Read article</h2><a/></div>
                `
            }
        });


        blogContainer.innerHTML += `<div class="read-article-button-container"><button onclick="getBlogData(20)"class="View_more_Posts" id="View_more_Posts">View More Posts</button></div>`;

        //removes the button if there is more than 10 posts
        const button = document.querySelector(".View_more_Posts");
        if (numberOfPosts === 10) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    } catch (error) {
        console.log("There seems to be a problem", error)
        blogContainer.innerHTML = "<p>Obs! something wrong while fetching data.</p>";
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


button.addEventListener("click", function () {
    getBlogData(20);

});


//search function
const search = document.querySelector("#search-articles");

search.onkeyup = function searcher() {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredPost = post.filter(function (post) {

        if (post.postTitle.toLowerCase().startsWith(searchValue)) {
            console.log(value)
            return true;
        }
    })

}