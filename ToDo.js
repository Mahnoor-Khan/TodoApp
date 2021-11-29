const change= document.getElementById('change');
const color=document.getElementById('color');
const body = document.body;

change.addEventListener('click' , changeBg);
function changeBg(){
const clr1= getRandomRgb();
const clr2= getRandomRgb();
const clr3= getRandomRgb();

const colorString= `rgb(${clr1},${clr2},${clr3})`

body.style.background= colorString;
 color.innerText = colorString;
}

function getRandomRgb(){
    return Math.floor(Math.random()* 256);
}
//getting all required elements
const inputBox=document.querySelector(".toDoInput .input");
const addBtn=document.querySelector(".toDoInput .addBtn");
const todoList=document.querySelector(".toDoList");

inputBox.onkeyup= () =>{
    let userData=inputBox.value; //getting user entered value
    if(userData.trim()!= 0){ //if user values are not anly spaces
        addBtn.classList.add("active")//activate the add btn
    }
    else{
        addBtn.classList.remove("active")//unactivate the add btn
    }
}
addBtn.onclick = () =>{
  
    
    let userData=inputBox.value; //getting use entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage== null){
        listArr= [];
    }
    else{
        listArr = JSON.parse(getLocalStorage)//transforming json string into js object
    }
    listArr.push(userData);//pushing or adding user data
    localStorage.setItem("New Todo" , JSON.stringify(listArr));//transforming js object into json string
    showTasks();
    
  
}

function showTasks(){

// let useData=inputBox.value;

// todoList.innerHTML=`<li>`  + useData +  `<span class="btnDel"><i class="fa fa-trash"></i></span></li>`
   
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage== null){
        listArr= [];
    }
    else{
        listArr = JSON.parse(getLocalStorage)//transforming json string into js object
    }
    let newLiTag='';
    listArr.forEach((element , index) =>{
        newLiTag=`<li> ${element} <span class="btnDel"><i class="fa fa-trash"></i></span></li>`    
    });
     todoList.innerHTML= newLiTag;
}

