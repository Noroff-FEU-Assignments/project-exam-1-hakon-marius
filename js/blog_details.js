const detailsContainer = document.querySelector(".detailsContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id")

console.log("id")

const url = "https://eboe.no/eboe/wp-json/wp/v2/posts/" + id;

console.log("url", url)

async function fetchBlog() {


    try {
        const response = await fetch(url);
        const blogDetails = await response.json();

        detailsContainer.innerHTML = "";

        console.log("www", blogDetails)

        let details = blogDetails

        blogdetails(details);
        console.log("test", details)

        //gives the page a unique title
        document.title = `Eboe! ${details.title.rendered}`;
    }
    catch (error) {
        console.log(error)
        detailsContainer.innerHTML = error;

    }

}

fetchBlog()

function blogdetails(details) {

    detailsContainer.innerHTML = `
    <div class="details-div"><h1>${details.title.rendered}</h1><p>${details.content.rendered}</p><div>`
}


