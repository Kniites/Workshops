$(function(){
    //const QUOTES = "http://quotes.rest/qod.json?category=inspire";
    //const MEMES = "https://api.imgflip.com/get_memes";
    let fig = $("figure").html();
    //let randomNum = Math.floor(16 * Math.random());
    let taskImages = [];
    let allFigs = $("img");
    let figCap = $("figcaption");
    for (let i = 0; i < allFigs.length; i++){
        taskImages.push({"image": allFigs[i].src, "captions": figCap[i].innerHTML});
        console.log(taskImages);
    }
    //$("#images").html(createFig(randomNum));
    /* $.get(QUOTES, function(data){
        //console.log("From jQuerry: " + data.contents.quotes.quote);
        $("#quotes").append(`<p>From jQuerry: ${data.contents.quotes.quote}</p>`);
    }).fail(function(){
        alert("Get request failed...");
    }); */

    /* fetch(MEMES).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        for(let i = 0; i < 10; i++){
            let randomNum = Math.floor(101 * Math.random());
            $("#memes").append(`<figure><a href="${data.memes[randomNum].url}"><img src="${data.memes[randomNum].url}" alt="${data.memes[randomNum].name}" width="${data.memes[randomNum].width}" height="${data.memes[randomNum].height}"></a><figcaption>${data.memes[randomNum].name}</figcaption></figure>`);
        }
        console.log($("#memes").html());
    }).catch(function(error){
        alert(error);
    });
 */
    $("#searchButton").click(() => {
        let num = $("#searchInput").val();
        if (isNaN(num) === false){
            console.log(num);
            $("#images").html(createFig(num));            
        }
        if (isNaN(num) === true){
            console.log(num);
            if (checkCaptions(num).length != 0){
                let imgSearch = checkCaptions(num);
                $("#images").html("");
                // forEach is here
                imgSearch.forEach(function(img){
                    $("#images").append(`<figure><a href="${img.image}"><img src="${img.image}" alt="${img.captions}" width="200" height="200"></a><figcaption>${img.captions}</figcaption></figure>`);
                });
                /* for (let i = 0; i < imgSearch.length; i++){
                    $("#images").append(`<figure><a href="${imgSearch[i].image}"><img src="${imgSearch[i].image}" alt="${imgSearch[i].captions}" width="200" height="200"></a><figcaption>${imgSearch[i].captions}</figcaption></figure>`);
                } */
            } else{
                $("#navList").append(`<li><a href="#">${num}</a></li>`);
            }
        }
    })

    function createFig(stupidNum){
        let htmlStr = "";
        for(let i = 0; i < stupidNum; i++){
            htmlStr += `<figure>${fig}</figure>`;
        }
        return htmlStr; 
    }

    function checkCaptions(inputCheck){
        let checkArray = [];
        for (let i = 0; i < taskImages.length; i++){
            if (taskImages[i].captions.includes(inputCheck)){
                checkArray.push(taskImages[i]);
            }
        }
        console.log(checkArray);
        return checkArray;
    }
});