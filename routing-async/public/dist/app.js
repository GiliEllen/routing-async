console.log("Connected!");
function handleGetClick() {
    try {
        axios.get("/api/randomImage").then(function (_a) {
            var data = _a.data;
            var domElement = data.domElement, error = data.error;
            if (error)
                throw new Error(error);
            renderPicture(domElement);
            console.log(domElement);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderPicture(domElement) {
    var image = document.querySelector("#imageToChange");
    var textArea = document.querySelector("#jokeArea");
    if (domElement.name === "meme") {
        image.src = domElement.src;
        textArea.innerText = "";
    }
    else if (domElement.name === 'joke') {
        textArea.innerText = domElement.src;
        image.src = "";
    }
}
