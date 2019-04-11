(async function (){
    const url = 'http://localhost:4000/catalog/games'
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if(xhr.response !== JSON && xhr.status !== 400){
            console.log(JSON.parse(xhr.response));
            successLogin(JSON.parse(xhr.response));

        }
        else{
            //document.location.reload();
        }
    }
}
}())
function successLogin(res){
    let gameInfo = {
        id: null,
        title: null,
        description: null,
        publisher:  null,
        developer:  null,
        releaseDate:  null,
        imgUri:  null,
        price:  null,
        createdDate:  null,
    };
    
    for(var i=0;i<res.length;i++)
    {
        gameInfo.id = res[i]._id;
        gameInfo.title = res[i].title
        gameInfo.description = res[i].description
        gameInfo.publisher = res[i].publisher,
        gameInfo.developer = res[i].developer,
        gameInfo.releaseDate = res[i].releaseDate,
        gameInfo.imgUri = res[i].imgUri,
        gameInfo.price= res[i].price,
        gameInfo.createdDate = res[i].createdDate
        buildCard(gameInfo);
    }
}
function buildCard(gameInstance){
    document.getElementById("list-of-games").innerHTML +='<li class="media"> \
          <img width="7%" src="'+gameInstance.imgUri+'" class="mr-3" alt="No image"> \
          <div class="media-body">\
            <h5 class="mt-0 mb-1">'+gameInstance.title+'</h5>\
            '+gameInstance.description+'\
          </div>\
          <div class="game-price"><a href="/catalog/'+gameInstance.id+'">$'+gameInstance.price+'</div>\
          <span></span>\
        </li>';
}