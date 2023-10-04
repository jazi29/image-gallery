const apiKey = 'FApOD2q-HN9hl9Kk9Z63onyvu9TAAGl37d7F-7Wl2Bg';
const searchInput = document.getElementById('search');
const imgContainers = document.querySelectorAll('.div');
const searchForm = document.getElementById('searchForm'); 


async function fetchImages(query) {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`);
    const data = await response.json();

    imgContainers.forEach(container => {
      container.innerHTML = '';
    });

    const firstNineResults = data.results.slice(0, 9);

    const imageWidth = '100%'; 
    const imageHeight = '100%';

    firstNineResults.forEach((result, index) => {
      const imgElement = document.createElement('img');
      imgElement.style.width = imageWidth;
      imgElement.style.height = imageHeight;
      imgElement.src = result.urls.regular;
      imgElement.alt = result.alt_description;

      imgContainers[index].appendChild(imgElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const query = searchInput.value;

  fetchImages(query);
});

fetchImages('nature'); 

window.addEventListener('load', function() {
  var inputField = document.getElementById('search');
  inputField.focus();
  inputField.setSelectionRange(inputField.value.length, inputField.value.length);
});
