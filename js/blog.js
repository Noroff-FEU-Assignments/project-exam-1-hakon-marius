const blogContainer = document.querySelector("#blogContainer");

async function getBlogData(numberOfPosts) {

    let url = `https://eboe.no/eboe/wp-json/wp/v2/posts?per_page=${numberOfPosts}`;


    try {

        const response = await fetch(url);
        const posts = await response.json();

        blogContainer.innerHTML = "";

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


        blogContainer.innerHTML += `<button onclick="getBlogData(20)"class="View_more_Posts" id="View_more_Posts">View More Posts</button>`;


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

