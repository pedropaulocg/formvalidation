var senha = document.getElementById('senha')
var erro = document.getElementById('erro')
var erro2 = document.getElementById('erro2')
var user = document.getElementById('nome')
var btn = document.getElementById('btn')

function validar(){
  if(user.value == ''){
    erro2.innerText = ('Campo obrigatório')
    return false
  }else if(user.value != ''){
    erro2.innerText = ('')
  }
  if(senha.value == ''){
    erro.innerText = ('Campo obrigatório')
    return false
  }
  else if(senha.value.length < 6){
    erro.innerText = ('Senha deve conter mais de 6 caracteres')
    return false
  }else if(senha.value != '' && senha.value.length >= 6){
    erro.innerText = ('')
  }
  else{
    return true
  }
  
}