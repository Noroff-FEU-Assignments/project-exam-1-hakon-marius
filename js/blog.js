
const blogContainer = document.querySelector("#blogContainer");



async function getBlogData() {

    let url = 'https://eboe.no/eboe/wp-json/wp/v2/posts';


    try {

        const response = await fetch(url);
        const posts = await response.json();

        posts.forEach(post => {



            postTitle = post.title.rendered;
            postContent = post.content.rendered;


            blogContainer.innerHTML += `<div class="singlepost"><a href="#"><div><h2>${postTitle}</h2>${postContent}</div> </div></a>`


        });


    } catch (error) {
        blogContainer.innerHTML = error;
    }

}


getBlogData()

