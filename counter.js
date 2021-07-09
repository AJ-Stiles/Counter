let increment = document.querySelector("#ADD_COUNT");
let decrement = document.querySelector("#LOWER_COUNT");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

increment.addEventListener("click" , ()=>{
    if(counter <= 49) {
        counter++;
    }
    counterValue.innerText = counter;
})
;
decrement.addEventListener("click" , ()=>{
    if(counter >= 1) {
        counter--;
    }
    counterValue.innerText = counter;
});
