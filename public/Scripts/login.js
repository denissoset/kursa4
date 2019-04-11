window.onload = function(){
    let userInfo = sessionStorage.getItem('username');
    if (userInfo){
        document.location.href = '/';
    }
}
function getToken(){
    let formData = {
      username : '',
      password : ''
    }
    formData.username = document.getElementById('username').value;
    formData.password = document.getElementById('password').value;
    formData = JSON.stringify(formData);
    const url = 'http://localhost:4000/users/authenticate'
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.withCredentials = true
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(formData);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if(xhr.response !== JSON && xhr.status !== 400){
            successLogin(xhr.response);
        }
        else{
            document.location.reload();
        }
    }
  }
  }
  function successLogin(res){
    let userData = {
        _id : '',
        username : '',
        role : ''
    };
    userData = JSON.parse(res);
    sessionStorage.setItem('_id',userData._id);
    sessionStorage.setItem('username',userData.username);
    sessionStorage.setItem('role',userData.role);
    document.location.href = '/';
  }
  