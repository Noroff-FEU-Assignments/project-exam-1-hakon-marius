const detailsContainer = document.querySelector(".detailsContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const container = document.querySelector(".container");

const url = "https://eboe.no/eboe/wp-json/wp/v2/posts/" + id

async function fetchBlog() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const postContent = data.content.rendered;
        const parser = new DOMParser();

        const doc = parser.parseFromString(postContent, "text/html");


        const heading = doc.querySelector(".wp-block-heading");

        const img = doc.querySelector(".wp-block-image");
        const title = doc.querySelector(".wp-block-post-title")
        const teksten = doc.querySelectorAll("p")
        const updated = doc.querySelector("time")

        let elementsHtml = "";
        img.classList.add("wordpressImage")

        teksten.forEach(element => {
            elementsHtml += `<p>${element.textContent}</p>`;
        });

        detailsContainer.innerHTML = `<h1>${heading.firstChild.data}</h1>
        </div class="modal">${img.outerHTML}</div><p>${updated.outerText}</p>${elementsHtml}</div>`

    } catch

    (error) {
        console.log(error)
        detailsContainer.innerHTML = error;
    }
}

fetchBlog()

