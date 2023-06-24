let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
console.log(inputs);

form.addEventListener("submit", function (event) {
    event.preventDefault()
    inputs.forEach(function(item){
        console.log(item.value);
        item.style.backgroundColor = "lightgray"
    })
})