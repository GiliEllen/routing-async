console.log(`Connected!`)

function handleGetClick() {
    try {
        axios.get("/api/randomImage").then(({ data }) => {
          console.log(data);
          const { DOMElement, error } = data;
          if (error) throw new Error(error);
          renderPicture(DOMElement);
        });
      } catch (error) {
        console.error(error);
      }
}

function renderPicture(DOMElement) {
    const image: HTMLImageElement = document.querySelector("#imageToChange");
  console.log(typeof(DOMElement))
    // image.src = `${picture.src}`;
  }
  