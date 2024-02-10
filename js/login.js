var Signup = () => {
    window.location.assign("../html/register.html");
}; 

const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const Login = () => {
  if (email.value === "") {
    message.innerHTML = "Email required!";
    message.style.color = "red";
  } else if (password.value === "") {
    message.innerHTML = "Password required!";
    message.style.color = "red";
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
  .then((userCredential) => {
    message.innerHTML = "Successfully login"
    message.style.color="green"
    if(userCredential.user.emailVerified){
      window.location.assign("../html/home.html")
    }else{
      window.location.assign("../html/email.html")
    }
  })
  .catch((error) => {
    message.innerHTML = error.message;
  });
}
}

const forgetPassword =()=>{
  window.location.assign("../html/ForgetPassword.html")
}