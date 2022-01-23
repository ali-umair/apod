fetch('https://api.nasa.gov/planetary/apod?api_key=nfU3RVhrltBaoTez42hpvcMK2wkCCjk4cNf6fLIL')
.then(response => response.json())
.then(data => {

    dataHandler(data);

    // console.log(data);
})

function dataHandler(data) {

    const img = document.querySelector('img');

    img.setAttribute('src', `${data.hdurl}`);

    // console.log(data.url);
}