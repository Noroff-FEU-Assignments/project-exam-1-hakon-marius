
const blogContainer = document.querySelector("#blogContainer");



async function getBlogData() {

    let url = 'https://eboe.no/eboe/wp-json/wp/v2/posts/';

    try {

        const response = await fetch(url);
        const posts = await response.json();


        console.log("posts", posts)
        posts.forEach(post => {

            postTitle = post.title.rendered;
            postContent = post.content.rendered;

            console.log(post.id)

            blogContainer.innerHTML +=
                `<a href="blog_specific.html?id=${post.id}" class="singlepost"><div><h2 class="postTitle">${postTitle}</h2>${postContent}<h2 class="read-more">Read More</h2></div></a>`;
        });



    } catch (error) {
        blogContainer.innerHTML = error;
    }

}

getBlogData()



//adds css class and removes class when checkbox is changed/checked. Stops body overflowing content on scroll on small screen

const menuCheckbox = document.querySelector("#menu-checkbox");
const body = document.querySelector("body");

menuCheckbox.addEventListener("change", function () {
    if (menuCheckbox.checked) {
        body.classList.add("burgerMenu");
    } else {
        body.classList.remove("burgerMenu");
    }
});