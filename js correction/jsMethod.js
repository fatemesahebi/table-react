let editIcon=document.getElementsByClassName('edit-options')
let deleteIcon=document.getElementsByClassName('delete-options')
let add=document.getElementById('add')
let tbody=document.querySelector('tbody')
let users=[{name:'Alireza',job:'physicist',email:'alirexa_2p@gmail.com'},
    {name:'Fateme',job:'Deeloper',email:'Fateme@gmail.com'},
    {name:'Milad',job:'Data scientist',email:'milad@gmail.com'},
    {name:'Mojde',job:'ui-ux designer',email:'mojde@gmail.com'}]

function creatHtml(obj){
    return `
       <tr>
     <td class="name">${obj['name']}</td>
        <td class="job">${obj['job']}</td>
        <td class="email">${obj['email']}
            <img class='delete-options options' src="https://img.icons8.com/ios-glyphs/30/444242/delete-sign.png" alt="delete-icon"/>
            <img class='edit-options options' src="https://img.icons8.com/material-rounded/48/444242/edit.png" alt="edit-icon"/>
        </td>
</tr>
    `
}
function creatTable(arr){
     return arr.map(obj=>{
        return creatHtml(obj)
        }
    ).join('')
}
tbody.innerHTML=creatTable(users)
edit()
deleteRow()
addRow()

function edit(){
    for(let i=0;i<users.length;i++){
        editIcon[i].onclick=function(){
           users[i]['name']=prompt("Enter your name")
            users[i]['job']=prompt("Enter your job")
            users[i]['email']=prompt("Enter your email")
            tbody.innerHTML=creatTable(users)
            edit()
            deleteRow()
            addRow()
        }
    }
}
function deleteRow(){
    for(let i=0;i<users.length;i++) {
    deleteIcon[i].onclick=function (){
        users.splice(i,1)
        tbody.innerHTML=creatTable(users)
        edit()
        deleteRow()
        addRow()

    }
    }
}

function addRow(){
    add.onclick=function (){
        let newUser={name:prompt("Enter your name"),
            job:prompt("Enter your job"),
            email:prompt("Enter your email")}
        users.push(newUser)
        tbody.innerHTML=creatTable(users)
        edit()
        deleteRow()
        addRow()

    }
}