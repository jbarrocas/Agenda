//identificar qual os dados que me interessam?
//atraves do parametro id que stá a ser passado como parametro

//1- obter URL
let url1 = window.location.href;
console.log(url1);
let url2 = document.URL;
console.log(url2);

//2 - criar a classe URL para poder usar programação orentada aos objetcos
let url = new URL(url2);
//3 - obter os search params (query string)
let queryString = url.searchParams;
console.log(queryString);
let id= queryString.get("id");


//endpoint
let endpointWebApi = "https://6427209546fd35eb7c3a9134.mockapi.io/infocontacto/"+id;

console.log(endpointWebApi);
// chamar a webpai passando este id para obter os dados deste contacto
// apresenta-los no ecrã
fetch(endpointWebApi)
.then(response => response.json())
.then(data =>{
    let info= `<div><h2>${data.name}</h2><p>telefone: ${data.telefone}</p>
    <p>email: ${data.email}</p><p>morada: ${data.morada}</p><p>cidade: ${data.cidade}</p></div>`
    let container = document.querySelector("#container");
    container.innerHTML = info;
})