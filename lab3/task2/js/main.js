$(function(){
    let fig = $("figure").html();  //document.getElementsByTagName("figure")[0].innerHTML;
    let randomNum = Math.floor(16 * Math.random());
    /* let imageData = {
        file: " ",
        caption: " "
    } */
    
    let taskImages = [];
    let allFigs = $("img"); //document.getElementsByTagName("img");
    let figCap = $("figcaption"); //document.getElementsByTagName("figcaption");
    for (let i = 0; i < allFigs.length; i++){
        //let figCount = document.getElementsByTagName("figure")[i].innerHTML;
    /*  let figTrim = figCount.trim();
        let figSplit = figTrim.split(" "); */
        /* console.log(figSplit.indexOf("<figcaption>"))
        console.log(figSplit[1]);
        console.log(figSplit[figSplit.length - 1]); */
        /* imageData.file = figSplit[1];
        imageData.caption = figSplit[figSplit.length - 1]; */
        taskImages.push({"image": allFigs[i].src, "captions": figCap[i].innerHTML});
        console.log(taskImages);
    }

    $("#images").html(createFig(randomNum));
    /* $("#images").html(""); //document.getElementById("images").innerHTML = " ";
    for(let i = 0; i < randomNum; i++){
        $("#images").html(`<figure>${fig}</figure>`); //document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
    } */

    function checkCaptions(inputCheck){
        let checkArray = [];
        for (let i = 0; i < taskImages.length; i++){
            if (taskImages[i].captions.includes(inputCheck)){
                checkArray.push(taskImages[i])
            }
        }
        console.log(checkArray);
        return checkArray;
    }

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
            //$("#images").html(`<figure>${fig}</figure>`); //document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
        }
        return htmlStr; 
    }

    /* document.getElementById("searchButton").onclick = () => {
        let num = document.getElementById("searchInput").value;
        if (isNaN(num) === false){
            console.log(num);
            document.getElementById("images").innerHTML = " ";
            for(let i = 0; i < num; i++){
                document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
            }
        }
        if (isNaN(num) === true){
            console.log(num);
            if (checkCaptions(num).length != 0){
                let imgSearch = checkCaptions(num);
                document.getElementById("images").innerHTML = " ";
                for (let i = 0; i < imgSearch.length; i++){
                    document.getElementById("images").innerHTML += `<figure><a href="${imgSearch[i].image}"><img src="${imgSearch[i].image}" alt="something cool" width="200" height="200"></a><figcaption>${imgSearch[i].captions}</figcaption></figure>`;
                }
            } else{
                document.getElementById("navList").innerHTML += `<li><a href="#">${num}</a></li>`;
            }
            
            
        }

    } */
});