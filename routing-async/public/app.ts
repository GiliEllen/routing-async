console.log(`Connected!`)

function handleGetClick() {
    try {
        axios.get("/api/randomImage").then(({ data }) => {
          console.log(data);
          const { domElement, error } = data;
          if (error) throw new Error(error);
          renderPicture(domElement);
        });
      } catch (error) {
        console.error(error);
      }
}


function renderPicture(domElement) {
    const image: HTMLImageElement = document.querySelector("#imageToChange");
    const textArea: HTMLElement = document.querySelector("#jokeArea");
  console.log(domElement)
    if(domElement.name = "meme") {
      image.src = domElement.src
    } else if (domElement.name = "joke"){
      textArea.innerHTML = domElement.src;
    }
  }
  