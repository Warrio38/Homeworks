function taskOne(){
    document.querySelector("div[id = title] span").textContent = "2020";
}
taskOne()
function taskTwo(){
    let del = document.querySelector("[my-attribute]");
    del.removeAttribute("my-attribute");
}
taskTwo()
function taskThree(){
    let green = document.querySelectorAll("[data-id]");
    for(let i = 0; i < green.length; i++){
        green[i].style.backgroundColor = 'limegreen'
    }
}
taskThree()
function taskFour(){
    let table = document.querySelector('table')
    let newTd = document.createElement('td')
    let newRow = document.createElement('tr')
    for(let i = 0; i < 3; i++){
        table = document.querySelector('table')
        newTd = document.createElement('td')
        newRow = document.createElement('tr')
        newRow.appendChild(document.createTextNode('Something'))
        newTd.appendChild(newRow)
        table.appendChild(newTd)
    }
}
taskFour()
function taskFive(){
    document.querySelector('tr').textContent = ''
}
taskFive()

