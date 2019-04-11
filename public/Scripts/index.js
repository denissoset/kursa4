window.onload = function(){
  if(sessionStorage.getItem('_id')){
  document.getElementById('nav-class').innerHTML += '<a class="nav-link" href="#">'+sessionStorage.getItem('username')+'</a>'; 
}
  else{
    document.getElementById('nav-class').innerHTML += '<a class="nav-link" onclick="showLoginForm()" href="login">Sign In</a>';
  }
}
