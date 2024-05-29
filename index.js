var image = document.querySelector("img");


document.getElementsByClassName("no")[0].addEventListener("mouseover", function(){
    image.setAttribute("src", "images/no.webp")
})
document.getElementsByClassName("no")[0].addEventListener("mouseout", function(){
    image.setAttribute("src", "images/start.gif")
})

document.getElementsByClassName("yes")[0].addEventListener("mouseover", function(){
    image.setAttribute("src", "images/yes.gif")
})
document.getElementsByClassName("yes")[0].addEventListener("mouseout", function(){
    image.setAttribute("src", "images/start.gif")
})