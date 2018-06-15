const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRutime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

inputText.addEventListener('keypress',(event) =>{
  let key = event.which || event.keyCode;
  if (key === 13) { //código 13 es enter
    let movie = inputText.value;
    console.log(movie);
    inputText.value = '';
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=d39aa64c`)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      renderInfo(data);//obtener la informacion
    })
  }
})

const renderInfo = data =>{
  containerTitle.innerHTML = data.Title;
  containerYear.innerHTML = data.Year;
  containerRutime.innerHTML = data.Runtime;
  containerImage.innerHTML = `<img src="${data.Poster}">`;
}