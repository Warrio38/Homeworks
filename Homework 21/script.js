fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then(toObject);
const todos = []
function toObject(data){
  for(let i = 0; i < data.length; i++){
    todos.push(data[i])
  }
}
let newTr = document.createElement('tr')
let newTd = document.createElement('td')
let TBody = document.getElementById('tb')
function allTodo(){
  for(let i = 0; i < todos.length; i++){
    newTd.append(todos[i].title)
    newTr.append(newTd)
    if(todos[i].completed === false){
      newTr.className = 'unConfirmed'
    }
    else{
      newTr.className = 'confirmed'
    }
    newTr.setAttribute('data-id', todos[i].id)
    TBody.append(newTr)
    newTr = document.createElement('tr')
    newTd = document.createElement('td')
  }
  document.getElementById('button').remove()
}
