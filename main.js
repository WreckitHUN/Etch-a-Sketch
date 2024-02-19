const MAX_SIZE = 600;

const body = document.body;
const btn = document.querySelector("#btn");

let number = 0;
let isMouseDown = false;

document.addEventListener('dragstart', function(event) {
    event.preventDefault();
  });

const onClick = () => {
    /* Get a number from the user */
    let userInput = prompt("Give me a number: ");
    number = userInput;
}

btn.addEventListener("click", () => {
    onClick();
    createGrid(number);
})


const createGrid = (x) => {

    /* Delete previous container if exist */
    let prevContainer = document.querySelector(".container");
    if (prevContainer !== null) prevContainer.remove();

    /* Create a container */
    let container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);

    /* Add Mouse listener to container */
    container.addEventListener("mousedown", () => isMouseDown = true);
    container.addEventListener("mouseup", () => isMouseDown = false);

    /* Create a row */
    for (let index = 0; index < x; index++) {
       
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        /* Create an element of the row */
        for (let index = 0; index < x; index++) {
            
            const rowItem = document.createElement("div");
            rowItem.classList.add("row__content");

            /* Set the size based on MAX_SIZE */
            rowItem.style.width = `${MAX_SIZE / x}px`
            rowItem.style.height = `${MAX_SIZE / x}px`

            /* Add function when hovering over the element */

            rowItem.addEventListener("mouseover", function () {
                if (isMouseDown) this.style.background = "#eb5e28";
            })
            rowItem.addEventListener("mousedown", function () {
                this.style.background = "#eb5e28";
            })
            row.appendChild(rowItem);
            
        }
        
    }
}

