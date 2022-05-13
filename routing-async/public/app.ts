console.log(`Connected!`)

function handleGetClick() {
    try {
        axios.get("/api/randomImage").then(({ data }) => {
          const { domElement, error } = data;
          if (error) throw new Error(error);
          renderPicture(domElement);
          console.log(domElement)
        });
      } catch (error) {
        console.error(error);
      }
}


function renderPicture(domElement) {
    const image: HTMLImageElement = document.querySelector("#imageToChange");
    const textArea: HTMLParagraphElement = document.querySelector("#jokeArea");
    if(domElement.name === "meme") {
      image.src = domElement.src;
      textArea.innerText = "";
    } else if (domElement.name === 'joke'){
      textArea.innerText = domElement.src;
      image.src = "";
    }
  }
  