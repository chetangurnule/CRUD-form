let arr = [];
let addUserButton = document.querySelector(".addUser");
addUserButton.addEventListener("click", addUser);
function addUser(e){
    e.preventDefault();
    let firstName = document.querySelector("#name").value;
    let profession = document.querySelector("#profession").value;
    let age = document.querySelector("#age").value;

    if(firstName == "" || profession == "" || age == ""){
        printMessage("error");
        clear();
        return;
    }
    // adding obj to the array
    let obj = {};
    obj.id = arr.length+1;
    obj.firstName = firstName;
    obj.profession = profession;
    obj.age = age;
    arr.push(obj);

    // calling function to add data to user inteface
    dataOnInterface(obj);

    // calling function to remove user added detail
    // removeAddText(); 
    
}


// function for adding employee details to the user interface
function dataOnInterface(obj){
    let userDiv = document.querySelector(".list");
    let div = document.createElement("div");
    div.classList.add("subList");
    div.innerHTML = `<div class="employeeDetail">
    <span>${obj.id}</span>
    <span>Name: ${obj.firstName}</span>
    <span>Profession: ${obj.profession}</span>
    <span>Age: ${obj.age}</span>
    </div>
    <div class="delete">
        <button class="deleteBtn">Delete User</button>
    </div>`;
    userDiv.append(div);
    printMessage("success");
    clear();
}

// function for printing message to a web page

function printMessage(str){
    let message = document.querySelector(".message");
    if(str == "error"){
        message.textContent = `Error : Please Make sure All the fields are filled before adding in an employee !`
        message.style.color = "red";
    }else{
        message.textContent = `Success : Employee Added!`
        message.style.color = "green";
    }
    setTimeout(()=>{
        message.textContent = "";
    }, 3000);
}

//  function to remove text of userAddedDetails
// function removeAddText(){
//     let text = document.querySelector(".userAddedDetails");
//     let list = document.querySelector(".list");
   
// }

// function for clearing the input 
function clear(){
    document.querySelector("#name").value = "";
    document.querySelector("#profession").value = "";
    document.querySelector("#age").value = "";
} 


// logic for deleting the employee on clicking the delete button
let deleteButton = document.querySelector(".list");
deleteButton.addEventListener("click", deleteUser);
function deleteUser(e){
    if(!e.target.classList.contains("deleteBtn")) return;
    let removingElement = e.target.parentElement.parentElement;
    let subList = document.querySelector(".subList");
    subList.remove(removingElement);
    
}