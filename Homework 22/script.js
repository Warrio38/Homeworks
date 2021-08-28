function active(){
  let city = document.getElementById("city").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2959810f3efb4f324441d26dc7871f32&units=metric`)
  .then((response) => response.json())
  .then(text);
}
function text(data){
  document.getElementById('p').innerHTML = `${data.main.temp}°С, ${data.weather[0].main} in ${data.name}`
}