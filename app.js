var userName = prompt("Enter User Name");
var phoneNumber = +prompt("Enter Phone Number");
var email = prompt("Enter Email");
var password = prompt("Enter Password");
var confirmPassword = prompt("Confirm Password");
if(!userName || !phoneNumber || !email  || !password || !confirmPassword ){
    document.write("Error Please Fill ")

}
else if(password===confirmPassword){
    document.write("Succesfully Registered")
    }
   
else{
    document.write("Password Do Not Correct")

}