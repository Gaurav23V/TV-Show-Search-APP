const form = document.querySelector("#seachForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const movieName = form.elements.query.value;
    const config = {params : { q : movieName}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows/`, config);
    makeImages(res.data);

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const image = document.createElement("IMG")
            image.src = result.show.image.medium;
            document.body.append(image);
        }else {
            console.log("No Image Available")
        }
    }
}