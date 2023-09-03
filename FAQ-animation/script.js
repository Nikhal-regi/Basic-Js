const lists = document.querySelectorAll('.Ques-Ans');

for (i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
};