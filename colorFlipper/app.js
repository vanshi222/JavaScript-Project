//set array of colors
const colors = ["green", "orange", "purple", "rgba(133,122,200)", "#f15025"];
 
const btn = document.getElementById("btn");  //get btn
const color = document.querySelector(".color");   //span element

// event listener
btn.addEventListener('click', function(){
    // console.log(document.body);

    //get random number between 0-4 from array color[1]...
    const randomNumber = getRandomNumber();
    // console.log(randomNumber); 

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
 
function getRandomNumber() {
    // return Math.random();
    return Math.floor(Math.random() * colors.length);
    //math.floor() = roundup the value
}
