let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.Things')
    document.querySelector('.Slider').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.Things')
    document.querySelector('.Slider').prepend(items[items.length - 1]) // here the length of items = 6
})