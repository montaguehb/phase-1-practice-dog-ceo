console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(imageObj => imageObj.message.forEach(element => {
        const image = document.createElement("img")
        const dogBreedLi = document.createElement("li")
        image.src = element
        dogBreedLi.textContent = element.split("/")[element.split("/").indexOf("breeds") + 1]
        if(dogBreedLi.textContent.charAt(0) !== document.querySelector("#breed-dropdown").value ) {
            dogBreedLi.hidden = true;
        }
        dogBreedLi.addEventListener("click", event => {
            event.target.style.color = "#ffb7c5"
        })
        document.querySelector("#dog-image-container").append(image)
        document.querySelector("#dog-breeds").append(dogBreedLi)
    }));

    
    document.addEventListener("change", event => {
        debugger
        document.querySelectorAll("li").forEach(element => {
            element.textContent.charAt(0) === event.target.value ? element.hidden = false:element.hidden = true;
        })
    })
});