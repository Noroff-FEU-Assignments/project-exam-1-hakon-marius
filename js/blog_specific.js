const detailsContainer = document.querySelector(".detailsContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")



const url = "https://eboe.no/eboe/wp-json/wp/v2/posts/" + id;

console.log("url", url)

async function fetchBlog() {


    try {
        const response = await fetch(url);
        const blogDetails = await response.json();

        detailsContainer.innerHTML = "";

        console.log("www", blogDetails)

        //modal 
        const getToImage = blogDetails.content.rendered;
        const parser = new DOMParser();
        const doc = parser.parseFromString(getToImage, "text/html");
        const img = doc.querySelector(".wp-block-image");
        img.classList.add("wordpressImage")
        console.log("immagge", img.firstChild)

        img.addEventListener("click", function () {
            console.log("Image clicked");

        });

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

    const close = document.querySelectorAll(".close");
    const modal = document.getElementById("modal");

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = details.content.rendered;
    const imgElement = tempDiv.querySelector("img");



    detailsContainer.innerHTML = `
    <div class="details-div"><h1>${details.title.rendered}</h1><div class="contentImg">${details.content.rendered}</div></div>
    <div id="modal" class="modal">
    <button onclick="closeModal()" class="close">&times;</button>
    <img class="modalImage" id="modalImage">
    </div>
</div>`

}



//modal


function closeModal() {
    console.log("its clicked")
    modal.style.display = "none";
}


function getImage() {
    const detailsContainer = document.querySelector(".detailsContainer");
    const images = detailsContainer.querySelectorAll("wp-image");
    console.log(images)

}

getImage()


