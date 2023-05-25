// Chave de API clima: 79f9a14ed28ebef5b34c4bee05ced746

// Chave de API noticia: 3521474ab88d4bf8b3ed7b69243ad51c



//USANDO API DA PREVISÃO DO TEMPO 
function exibirClima() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=são paulo&lang=pt_br&appid=79f9a14ed28ebef5b34c4bee05ced746&units=metric').then(function (resposta) {
        return resposta.json()
    }).then(corpo => {
        console.log(corpo)
        document.getElementById("h2-clima").innerHTML = Math.floor(corpo.main.temp) + '°C';
        document.getElementById("desc-clima").innerHTML = corpo.weather[0].description
    })
}
exibirClima()



// // USANDO A API DAS NOTÍCIAS
function exibirNoticias() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(respostas => respostas.json())
        .then((json) => {
            console.log(json)

            // Exibir todos os posts retornados pela api
            // Usando InnerHTML

            //Títulos das matérias 
            document.querySelector('#titulo-post-main1').innerHTML = json[0].title
            document.querySelector('#titulo-post-main2').innerHTML = json[1].title
            document.querySelector('#titulo-post-main3').innerHTML = json[2].title
            document.querySelector('#titulo-post-main4').innerHTML = json[3].title
            document.querySelector('#titulo-post-main5').innerHTML = json[4].title
            document.querySelector('#titulo-post-main6').innerHTML = json[5].title
            document.querySelector('#titulo-post-main7').innerHTML = json[6].title
            document.querySelector('#titulo-post-main8').innerHTML = json[7].title
            document.querySelector('#lateral-post1').innerHTML = json[8].title
            document.querySelector('#lateral-post2').innerHTML = json[9].title
            document.querySelector('#lateral-post3').innerHTML = json[10].title
            document.querySelector('#lateral-post4').innerHTML = json[11].title
            document.querySelector('#lateral-post5').innerHTML = json[12].title
            document.querySelector('#lateral-post6').innerHTML = json[13].title
            document.querySelector('#lateral-post7').innerHTML = json[14].title

            //Descrição da matéria
            document.querySelector('#p-post-main-1').innerHTML = json[0].body
            document.querySelector('#p-post-main-2').innerHTML = json[1].body
            document.querySelector('#p-post-main-3').innerHTML = json[2].body
            document.querySelector('#p-post-main-4').innerHTML = json[3].body
            document.querySelector('#p-post-main-5').innerHTML = json[4].body
            document.querySelector('#p-post-main-6').innerHTML = json[5].body
            document.querySelector('#p-post-main-7').innerHTML = json[6].body
            document.querySelector('#p-post-main-8').innerHTML = json[7].body

        })
}
exibirNoticias()


// // USANDO API DE CONVERSOR DE MOEDAS

function retornaCotacao() {
    fetch('https://v6.exchangerate-api.com/v6/fe12292d7210fde8afafe74e/pair/USD/BRL').then((resposta) => {
        return resposta.json()
    }).then((corpo) => {
        console.log(corpo)
        document.getElementById('h2-moeda').innerHTML = 'R$' + corpo.conversion_rate
    })
}

retornaCotacao()



// API DE FOTOS

function exibirFotos() {
    const chave = '1hSyyH7PRVxtI3JO56VIGpAWKiya1hBkstAqDqADlAc';
    const url = `https://api.unsplash.com/search/photos?query=people`;

    fetch(url, {
        headers: {
            Authorization: `Client-ID ${chave}`
        }
    })
        .then(response => response.json())
        .then(img => {
            // Processar a resposta da API aqui
            console.log(img);

            // preencher as divs com imagens
            document.getElementById('img1').src = `${img.results[0].urls.full}`
            document.getElementById('img2').src = `${img.results[1].urls.full}`
            document.getElementById('img3').src = `${img.results[2].urls.full}`
            document.getElementById('img4').src = `${img.results[3].urls.full}`
            document.getElementById('img5').src = `${img.results[4].urls.full}`
            document.getElementById('img6').src = `${img.results[5].urls.full}`
            document.getElementById('img7').src = `${img.results[6].urls.full}`
            document.getElementById('img8').src = `${img.results[7].urls.full}`
            document.getElementById('img9').src = `${img.results[8].urls.full}`
            document.getElementById('img10').src = `${img.results[9].urls.full}`
            document.getElementById('img11').src = `${img.results[1].urls.full}`
            document.getElementById('img12').src = `${img.results[2].urls.full}`
            document.getElementById('img13').src = `${img.results[3].urls.full}`
            document.getElementById('img14').src = `${img.results[4].urls.full}`
            document.getElementById('img15').src = `${img.results[5].urls.full}`

        })
        .catch(error => {
            // Lidar com erros de solicitação aqui
            console.error(error);
        });

}

 exibirFotos()
