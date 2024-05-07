
function registerForm(){
    event.preventDefault();
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var phone = document.getElementById("phone")
    var password = document.getElementById("password")
    var cpassword = document.getElementById("cpassword")
    var userGetData = localStorage.getItem("student")
    userGetData = JSON.parse(userGetData)

    if(name.value ===''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter a name",
            
          });
    }
    else if(email.value ===""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter a name",
            
          });
    }
    else if(phone.value ===''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter a email",
            
          });

    }
    else if(password.value===''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter a Password",
            
          });
    }
    else if(cpassword.value !==password.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password & Confirm Password Not Match",
            
          });
    }
    else{
        Swal.fire({
            icon: "Success",
            title: `${name.value} Registration Successfully`,
            text: "COngratulation",
            
          });
        setTimeout(() =>{
            window.location.href="./login.html"
        },1000)
    }


    var student ={
        name:name.value,
        email:email.value,
        phone:phone.value,
        password:password.value,
        cpassword:cpassword.value
    }

    
    

    localStorage.setItem("student",JSON.stringify(student))

}

function loginForm(){
    event.preventDefault()
    var password = document.getElementById("password")
    var email = document.getElementById("email")
    var userGetData = JSON.parse(localStorage.getItem("student"))
    
    if(!userGetData){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password & Confirm Password Not Match",
            
          });

    }

    if(userGetData.email !==email.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email",
            
          });
    }
    else if(userGetData.password !==password.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Password",
            
          });
    }
    else{
        Swal.fire({
        
            icon: "Success",
            title:  `${userGetData.name} Successfully Login`,
            timer: 1500,
          });
        setTimeout(() =>{
            window.location.href="./index.html"

        },2000)
    }

}


