if (document.cookie !== ""){
  let myCookie = document.cookie
  let cookies = myCookie.split('=')
  document.body.innerHTML = "";
  let div = document.createElement('div')
  div.append(`Привет ${cookies[1]}`)
  div.className = 'text'
  document.body.append(div)
}
function logIn() {
  let input = document.querySelector("input");
  let name = input.value;
  if(name === ""){
    alert('Вы не написали имя')
  }
  else{
    document.cookie = `name=${name}`
    let myCookie1 = document.cookie
    let cookies1 = myCookie1.split('=')
    document.body.innerHTML = "";
    let div = document.createElement('div')
    div.append(`Привет ${cookies1[1]}`)
    div.className = 'text'
    document.body.append(div)
  }
}
