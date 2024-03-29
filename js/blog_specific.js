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
        const figure = doc.querySelector("figure")

        let elementsHtml = "";
        img.classList.add("wordpressImage")

        teksten.forEach(element => {
            elementsHtml += `<p>${element.textContent}</p>`;
        });

        detailsContainer.innerHTML = `<h1>${heading.firstChild.data}</h1>
        </div class="ice">${img.outerHTML}</div><p>${updated.outerText}</p>${elementsHtml}<span id="modal"></span></div>`

        //gives the page a unique title
        document.title = `Eboe | article ${heading.firstChild.data}`;

    } catch (error) {
        console.log("There seems to be a problem", error)
        blogContainer.innerHTML = "<p>Obs! something wrong while fetching data.</p>";
    }


    //modal onclick
    const modalImage = detailsContainer.querySelectorAll("img");

    modalImage.forEach((modalImage) => {
        modalImage.addEventListener("click", function () {
            console.log(modalImage.src)
            myModalFunction(modalImage)
        });
    });
}
fetchBlog()


//Modal function
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

function myModalFunction(modalImage) {
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const modalImageClone = modalImage.cloneNode(true);
    modalImageClone.classList.add("modal-image");
    modalContent.appendChild(modalImageClone);
    modal.appendChild(modalContent);

    modal.style.display = "block";
    modal.addEventListener("click", function () {
        modal.style.display = "none";
        modalContent.remove();
    });
}
