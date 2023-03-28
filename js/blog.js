
const blogContainer = document.querySelector("#blogContainer");



async function getBlogData() {

    let url = 'https://eboe.no/eboe/wp-json/wp/v2/posts/?per_page=10';

    try {

        const response = await fetch(url);
        const posts = await response.json();


        console.log(posts)
        posts.forEach(post => {



            postTitle = post.title.rendered;
            postContent = post.content.rendered;
            blogContainer.innerHTML += `<div class="singlepost" id="${post.id}"><div><h2 class="postTitle">${postTitle}</h2>${postContent}<a href="#"class="linkToFullPost">Read more
            </a></div></div>`
        });



    } catch (error) {
        blogContainer.innerHTML = error;
    }

}

getBlogData()
