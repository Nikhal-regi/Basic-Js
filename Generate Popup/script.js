let openbtn = document.querySelector(".btn");
let closebtn = document.querySelector(".closebtn");
let container = document.querySelector(".popup");


openbtn.addEventListener('click', function () {
    container.style.display = 'block';
});

closebtn.addEventListener('click', function () {
    container.style.display = 'none';
});