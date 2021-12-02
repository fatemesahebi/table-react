let editIcon=document.getElementsByClassName('edit-options')
let deleteIcon=document.getElementsByClassName('delete-options')
let name=document.getElementsByClassName('name')
let job=document.getElementsByClassName('job')
let email=document.getElementsByClassName('email')
let tableRow=Array.from(document.querySelectorAll('tr'))
let add=document.getElementById('add')
let table=document.querySelector('table')

edit()
deleteRow()
function edit(){
    for (let i=0;i<editIcon.length;i++){
        editIcon[i].onclick=function(){
            name[i].textContent=prompt("Enter your name")
            job[i].textContent=prompt("Enter your job")
            email[i].textContent=prompt("Enter your email")

        }
    }

}
function deleteRow(){
    for (let i=0;i<deleteIcon.length;i++) {
        deleteIcon[i].onclick=function (){
            tableRow[i+1].style.display='none'
        }
    }
}

add.onclick=function(){
    let newName=prompt("Enter your name")
    let newJob=prompt("Enter your job")
    let newEmail=prompt("Enter your email")
    let newHtml=`
    <tr>
     <td class="name">${newName}</td>
        <td class="job">${newJob}</td>
        <td class="email">${newEmail}
            <img class='delete-options options' src="https://img.icons8.com/ios-glyphs/30/444242/delete-sign.png"/>
            <img class='edit-options options' src="https://img.icons8.com/material-rounded/48/444242/edit.png" />
        </td>
</tr>
    `
    table.innerHTML+=newHtml
    deleteRow()
    edit()
}
