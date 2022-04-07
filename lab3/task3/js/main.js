$(function(){
    const QUOTES = "http://quotes.rest/qod.json?category=inspire";
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
    $.get(QUOTES, function(data){
        //console.log("From jQuerry: " + data.contents.quotes.quote);
        $("#quotes").append(`<p>From jQuerry: ${data.contents.quotes.quote}</p>`);
    }).fail(function(){
        alert("Get request failed...");
    });

    fetch(QUOTES).then(function(response){
        return response.json();
    }).then(function(data){
        //console.log("From fetch: " + data.contents.quotes.quote);
        $("#quotes").append(`<p>From fetch: ${data.contents.quotes.quote}</p>`);
    }).catch(function(error){
        alert(error);
    });

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
                for (let i = 0; i < imgSearch.length; i++){
                    $("#images").append(`<figure><a href="${imgSearch[i].image}"><img src="${imgSearch[i].image}" alt="something cool" width="200" height="200"></a><figcaption>${imgSearch[i].captions}</figcaption></figure>`);
                }
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