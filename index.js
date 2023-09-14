//1. reference html element form in js
const formTask = document.querySelector(".form-task");
//contoh lain pakai const formTask = document.getElementsByClassName(".form-task");


//2. menambahkan event listener du element form
formTask.addEventListener("submit", (e) => { // tiap event ada parameter e = event
    e.preventDefault();
    
    //3. referene html element input 
    const inputForm = document.querySelector(".input-form");   
    console.log(inputForm.value);

    //4. reference html element ul / wrapper list
    const wrapperList = document.querySelector(".task-list-wrapper")

    //5. create document <li> using js
    const taskList = document.createElement("li");

    //6. masukkan input value ke <li>
    taskList.innerHTML = inputForm.value;
    //<li>inputvalue</li>

    //7. append <li> ke <ul>
    wrapperList.append(taskList);

    //8. menghilangkan karakter di dalam input
    inputForm.value = " ";
});

