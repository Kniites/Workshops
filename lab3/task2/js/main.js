$(function(){
    $.get("./data/photodata.json", function(data){
        let htmlStr = "";
        for(let i = 0; i < data.photos.length; i++){
            htmlStr += `<figure><a href="${data.photos[i].file}"><img src="${data.photos[i].file}" alt="${data.photos[i].caption}" width="200" height="200"></a><figcaption>${data.photos[i].caption}</figcaption></figure>`;           
        }
        $("#images").html(htmlStr);
    
        let fig = $("figure").html();
        console.log(fig);
        console.log($("#images").html());
        let randomNum = Math.floor(16 * Math.random());
        /* let taskImages = [];
        let allFigs = $("img"); 
        let figCap = $("figcaption"); 
        for (let i = 0; i < allFigs.length; i++){
            taskImages.push({"image": allFigs[i].src, "captions": figCap[i].innerHTML});
            console.log(taskImages);
        } */

        $("#images").html(createFig(randomNum));

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
                        $("#images").append(`<figure><a href="${imgSearch[i].image}"><img src="${imgSearch[i].image}" alt="${imgSearch[i].captions}" width="200" height="200"></a><figcaption>${imgSearch[i].captions}</figcaption></figure>`);
                    }
                } else{
                    $("#navList").append(`<li><a href="#">${num}</a></li>`);
                }        
            }
        });

        function checkCaptions(inputCheck){
            let checkArray = [];
            for (let i = 0; i < data.photos.length; i++){
                if (data.photos[i].caption.includes(inputCheck)){
                    checkArray.push(data.photos[i]);
                }
            }
            console.log(checkArray);
            return checkArray;
        }

        function createFig(stupidNum){
            let htmlStr = "";
            for(let i = 0; i < stupidNum; i++){
                htmlStr += `<figure>${fig}</figure>`;           
            }
            return htmlStr; 
        }
    });
});