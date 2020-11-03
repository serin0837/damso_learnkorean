const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

//can not really understand how this works


//form
let messageRef = firebase.database().ref("messages")

//listen for from submit
document.getElementById("contactForm").addEventListener("submit",submitForm);
function submitForm(e){
  e.preventDefault();

  //Get values
  let name = getInputVal("name")
  let email = getInputVal("email")
  let message = getInputVal("message")
  
  //save message
  saveMessage(name,email,message)  
  //show alert
  document.querySelector(".alert").style.display="block";
  //hide alert
  setTimeout(function(){
    document.querySelector(".alert").style.display="none";
  },3000)
  //clear form
  document.getElementById("contactForm").reset()
}

//function to get form value
function getInputVal(id){
  return document.getElementById(id).value
}

//save message to firebase
function saveMessage(name,email,message){
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    message:message
  })
}