let form= document.getElementById("fname")

// console.log(data)


let fname = document.getElementById("fname");
console.log(form)
let lname = document.getElementById("lname");
let num = document.getElementById("num");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let cpwd = document.getElementById("cpwd");
let btn = document.getElementById("submit");


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    // console.log(fname.value)
    
    if(fname.value==""|| lname.value==""||num.value==""||email.value==""||pwd.value==""||cpwd.value==""){
        // console.log(" enter your detalis")
        // window.alert("hey idiot enter the detalis")
    }
    else if(pwd.value!== cpwd.value){
        window.alert("the password should match");
    }
    else if( num.value.length!==10){
            window.alert("Enter a valid 10-digit number");
        
        }
        else{
            console.log(fname.value,lname.value,num.value,email.value,pwd.value,cpwd.value )
            
            window.location.reload()
            localStorage.setItem("username",email.value)
            localStorage.setItem("password",pwd.value)
            window.location.href="login.html";
        
    }
    
})