'use strict'

function login(){
  const id = document.querySelector('#id');
  const pw = document.querySelector('#pw');

  if(id.value == "" || pw.value =="") {
    alert('로그인을 할 수 없습니다.')
  }
  else {
    location.href = 'main.html';
  }
}

function back() {
  history.go(-1);
}

function create_id() {
  var id =  document.querySelector('#id');
  var pw = document.querySelector('#pw');
  var r_pw = document.querySelector('#r_pw');

  if(id.value == "" || pw.value =="" || r_pw.value == "") {
    alert("회원가입을 할 수 없습니다.")
  }
  else {
    // pw값과 r_pw값이 일치하지 않을 때
    if(pw.value !== r_pw.value) {
        alert("비밀번호를 확인해주세요.")
    }
    else{
      location.href = 'index.html';
    }
  }
}