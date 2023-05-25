// Pegando a URL
let url = new URL(window.location.href)
// console.log(url)

// Pegando os parametros da URL
let parametros = new URLSearchParams(url.search)
// console.log(parametros)

// Pegando o valor do parâmetro 'id'
var id = parametros.get('id');
// console.log(id);

function pegarPost(){
// API que retornas os posts
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then((json) => {

        // Exibir o Post
        document.getElementById('titulo-post').innerHTML = json.title
        document.getElementById('corpo-post').innerHTML = json.body

      })

}

pegarPost()

function gerarComentarios(valor){
    const divComentarios = document.querySelector('#exibir-comentario')

        const qtdComentarios = valor.length

        // console.log(`Olha quantos comentarios eu tenho: ${qtdComentarios}`)

        for(let i = 0; i < qtdComentarios; i++ ){
            let id = document.createElement('h6');
            let email = document.createElement('h3');
            let paragrafo = document.createElement('p');
            let hr = document.createElement('hr');
            
            id.textContent = valor[i].id
            email.textContent = valor[i].email
            paragrafo.textContent = valor[i].body;

            divComentarios.appendChild(id);
            divComentarios.appendChild(email);
            divComentarios.appendChild(paragrafo);
            divComentarios.appendChild(hr);
        }
}

function pegarComentarios(){
    //Pegando os cometário do post retornado da API
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {        
        gerarComentarios(data)
      })
}

pegarComentarios()
