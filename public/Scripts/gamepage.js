(async function (){
    const url = document.location.href;
    console.log(url);
    let xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if(xhr.response !== JSON && xhr.status !== 400){
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
        images: []
    };
        gameInfo.id = res[0]._id;
        gameInfo.title = res[0].title
        gameInfo.description = res[0].description
        gameInfo.publisher = res[0].publisher,
        gameInfo.developer = res[0].developer,
        gameInfo.releaseDate = res[0].releaseDate,
        gameInfo.imgUri = res[0].imgUri,
        gameInfo.price= res[0].price,
        gameInfo.createdDate = res[0].createdDate
        for(let i=0;i<res[0].images.length;i++)
        {
            gameInfo.images[i] = res[0].images[i].imgUri;
        }
        console.log(gameInfo);
        buildCard(gameInfo);
}

 buildCard = (gameInfo) => {  
    let indicatorsStmnt = '';
    let carouselStmnt = '';
    for(let i=0;i<gameInfo.images.length;i++){
       if(i==0)
        {
            carouselStmnt = '<div class="carousel-item active"><img style="width:30vw" src="'+gameInfo.images[i]+'" alt="No image"></div>';
            indicatorsStmnt = '<li data-target="#carouselExampleIndicators" data-slide-to="'+i+'" class="active"></li>';
       }
       else{
            carouselStmnt +=  '<div class="carousel-item"><img class="d-block w-30" src="'+gameInfo.images[i]+'"></div>';
            indicatorsStmnt += '<li data-target="#carouselExampleIndicators" data-slide-to="'+i+'"></li>'
       }
    } 
     document.getElementById("indicators").innerHTML+= indicatorsStmnt;
     document.getElementById("carousel-container").innerHTML  += carouselStmnt;
     document.getElementById("carousel-text-id").innerHTML+='<div> <img src="'+gameInfo.imgUri+'"  alt="No image"></div><p>'+gameInfo.description+'</p>';
}