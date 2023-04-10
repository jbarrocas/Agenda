let webapiEndpoint = "https://6427209546fd35eb7c3a9134.mockapi.io/infocontacto/";

let btnLoad = document.querySelector("#getData");
btnLoad.addEventListener("click", eventArgs =>{
   
   let butoon = eventArgs.target;
   if(butoon.classList.contains("disable")){
    return;
   }
   butoon.classList.add("disable"); 
    let loader = document.querySelector(".loader");
    let msgNoResults = document.querySelector(".no-result-message");
    let contentData = document.querySelector("#dataContent");
   if(contentData){
     contentData.innerHTML = "";
   }
   else{ 
    msgNoResults.classList.toggle("hide");
   }
    loader.classList.toggle("hide");

    fetch(webapiEndpoint)
    .then(response => response.json())
    .then(data =>{
        let newContent = "";
        data.forEach(element => {
            newContent = newContent + `<div id="dataContent"><h2>nome: ${element.name}</h2><p>Telefone: ${element.telefone}</p><a href="./detail.html?id=${element.id}">ver mais-></a><input type="button" value="open popup" onclick="openPopup(${element.id})"  ></div> `;
        });
            
        let resultsDiv = document.querySelector("#data");
        resultsDiv.innerHTML = resultsDiv.innerHTML + newContent;
        let loader1 = document.querySelector(".loader");
    
        loader1.classList.toggle("hide");
        // butoon.classList.remove("disable"); 
        });
     
});

function openPopup(id){
    let popup = document.querySelector('.detail');
    let background = document.querySelector('.detail-background');
    popup.classList.remove('hide');
    background.classList.remove('hide');
    let webapiEndpointDetail = "https://6427209546fd35eb7c3a9134.mockapi.io/infocontacto/"+id;
    

    fetch(webapiEndpointDetail)
    .then(response => response.json())
    .then(data => {
        // let contactDetail="";
        let elem = data;        
        contactDetail = `<div id="detailContent"><h2>nome: ${elem.name}</h2><p>Telefone: ${elem.telefone}</p><p>Email: ${elem.email}</p><p>Cidade: ${elem.cidade}</p></div> `;        

        popup.innerHTML = popup.innerHTML + contactDetail;

        let closeButton = document.querySelector('#close');
        closeButton.addEventListener('click', () => {
        let popup = document.querySelector('.detail');
        let background = document.querySelector('.detail-background');
        popup.classList.add('hide');
        background.classList.add('hide');

        popup.innerHTML = `<div class="detail-data"></div>
        <input type="button" id="close" value="close">`
        });
    })
}
