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

        console.log("img", img)


        let elementsHtml = "";
        img.classList.add("wordpressImage")


        teksten.forEach(element => {
            elementsHtml += `<p>${element.textContent}</p>`;
        });

        detailsContainer.innerHTML = `<h1>${heading.firstChild.data}</h1>
        </div class="ice">${img.outerHTML}</div><p>${updated.outerText}</p>${elementsHtml}<span id="modal"></span></div>`

    } catch

    (error) {
        console.log(error)
        detailsContainer.innerHTML = error;
    }



    //torsdag 13.04
    //modal onclick
    const modalImage = detailsContainer.querySelectorAll("img");

    modalImage.forEach((modalImage) => {
        modalImage.addEventListener("click", function () {
            console.log(modalImage.src)
            myFunction(modalImage)
        });
    });
}
fetchBlog()


const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

function myFunction(modalImage) {
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