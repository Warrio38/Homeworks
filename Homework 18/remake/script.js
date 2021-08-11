if (document.cookie !== ""){
  hideform()
}
function logIn() {
  let input = document.querySelector("input");
  let name = input.value;
  document.cookie = `name=${name}`
  if(name === ""){
    alert('Вы не написали имя')
  }
  else{
    hideform()
  }
}
function hideform(){
  let myCookie = document.cookie.split(';')
  let cookies = myCookie[0].split('=')
  document.querySelector('#skip').className = 'skip'
  let div = document.createElement('div')
  div.append(`Привет ${cookies[1]}`)
  div.className = 'text'
  document.body.append(div)
}
