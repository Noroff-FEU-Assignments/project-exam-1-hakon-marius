export function searcher(searchValue, event);

const search = document.querySelector("search-articles");


search.onkeyup = function searcher() {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredPost = post.filter(function (post) {

        if (post.postTitle.toLowerCase().startsWith(searchValue)) {
            console.log(value)
            return true;
        }
    })

}