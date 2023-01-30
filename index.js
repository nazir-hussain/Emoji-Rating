const starEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far")
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0);

starEl.forEach((starEl, index)=>{
    starEl.addEventListener("click", () => {
        updateRating(index)
    })
})

function updateRating(index) {
    starEl.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active");
        }else{
            starEl.classList.remove("active")
        }
    })

    emojisEl.forEach(emojisEl => {
        emojisEl.getElementsByClassName.transform = `translateX(-${index * 50}px)`;
        emojisEl.style.color= colorsArray[index]
    })
//         coding by Nazir
}
