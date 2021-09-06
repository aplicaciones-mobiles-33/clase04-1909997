const getBtn = document.getElementById('getBtn');
const get404Btn = document.getElementById('get404Btn');
const get200Btn = document.getElementById('get200Btn');
const postBtn = document.getElementById('postBtn');
const estadoRequest = document.getElementById('estadoRequest');
const imgRespone = document.getElementById('imgEesponse');
const responseData = document.getElementById('responseData');


function httpRequest(metodo, url, data){
    const xhr = new XMLHttpRequest();
    xhr.open(metodo, url);

    xhr.onload = function(){
        console.log(xhr.status);
        var responseData = xhr.response;
        console.log(responseData);
    }

    xhr.onreadystatechange = function(){
        if(xhr.status == 200) {
            estadoRequest.innerHTML = 'yay!';
            imgRespone.src ='',
            popuplateData(responseData);

        }
        if(xhr.status == 404){
            imgResponse.style.display ='block';
            imgRespone.src = 'https://31.media.tumblr.com/2e8986a1b1c062623cea1b9edaddcc52/tumblr_mup3qzOPsX1rk0k2jo1_500.gif';
            estadoRequest.innerHTML = 'Oops!'
        }
    }

    xhr.send();
}

function popuplateData(datos){
    for(var i=0;i<usuarios.length;i++){
        console.group(datos[i]);
        var newUserDiv = document.createElement('div');
        var userNameTag = document.createElement('p');
        var userEmail = document.createElement('p');
        var imgTag = document.createElement('img');

        userEmail.classList.add('email');
        userNameTag.classList.add('nombre');
        newUserDiv.classList.add('response');
        imgTag.classList.add('avatar');

        newUserDiv.appendChild(userNameTag);
        newUserDiv.appendChild(userEmail);
        newUserDiv.appendChild(imgTag);
        responseData.appendChild(newUserDiv);
    }
}

function getData(){
    httpRequest('GET','https://regres.in/api/users?page=2');
 /*   const xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://reqres.in/api/users?page=2');

    xhr.onload()= function(){
        console.log(xhr.response)
        //const data = xhr.response,
        //console.log(data);
    }

    xhr.send();*/
}

function get404(){
    httpRequest('GET','https://regres.in/api/users/23');
}
function get200(){
    httpRequest('GET','https://regres.in/api/users/12');
}
function postData(){
    httpRequest('POST','https://regres.in/api/users' , {
        name: "morpheus",
        job: "leader"

    })
}

getBtn.addEventListener('click', getData);
get404Btn.addEventListener('click',get404 );
get200Btn.addEventListener('click', get200);
postBtn.addEventListener('click', postData)