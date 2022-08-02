const uList = document.querySelector("ul");
const addForm = document.querySelector(".add");
const search = document.querySelector(".search-form");
let countToDos = 0

// add item
addForm.addEventListener("submit", e =>{
    e.preventDefault();
    let text = addForm.querySelector("input").value.trim();
    if (text !== ""){
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" class="li-checkbox"><span>${text}</span><i class="fa-solid fa-trash-can"></i>`;
        uList.appendChild(li);
        countToDos ++;
        document.querySelector(".no-item").style["display"] = "none";
    }
        addForm.reset();
});

// remove item; mark completed item 
uList.addEventListener("click", e =>{
    if (e.target.classList.value === "fa-solid fa-trash-can"){
        e.target.parentElement.remove();
        countToDos --;
        if(countToDos === 0){
            document.querySelector(".no-item").style["display"] = "block";
        }
    }
    else if(e.target.classList.value === "li-checkbox"){
        if (e.target.checked){
            e.target.parentElement.querySelector("span").style["text-decoration"] = "line-through";
        }
        else{
            e.target.parentElement.querySelector("span").style["text-decoration"] = "none";
        }
        console.log("foi"); 
    }
})

// search to dos
search.addEventListener("keyup", e=>{
    console.log(e.target.value);
    if(e.target.value.trim() === ""){
        for (item of uList.getElementsByTagName("li")){
            item.classList.remove("none");
        }
    }
    else{
        for (item of uList.getElementsByTagName("span")){
            if(!item.innerHTML.includes(search.querySelector("input").value)){
                item.parentElement.classList.add("none");
            }
        }
    }
})