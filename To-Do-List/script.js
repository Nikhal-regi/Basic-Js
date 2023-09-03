const addbtn = document.querySelector('.add');
let inputtask = document.querySelector(".name");
let displaybox = document.querySelector(".tasks");

addbtn.addEventListener('click', function () {
    let div1 = document.createElement('div');
    div1.classList.add('items');
    let li = document.createElement('li');
    li.innerText = `${inputtask.value}`;
    div1.appendChild(li);

    let chkbtn = document.createElement('button');
    chkbtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    chkbtn.classList.add("checkbtn");
    div1.appendChild(chkbtn);

    let delbtn = document.createElement('button');
    delbtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    delbtn.classList.add("trashbtn");
    div1.appendChild(delbtn);

    if (inputtask.value === "") {
        alert("please give a task!!");
    } else {
        displaybox.appendChild(div1);
    }

    inputtask.value = "";

    chkbtn.addEventListener('click', function () {
        chkbtn.parentElement.style.textDecoration = 'line-through';
    });

    delbtn.addEventListener('click', function (e) {
        let tar = e.target;
        tar.parentElement.parentElement.remove();
    });

});