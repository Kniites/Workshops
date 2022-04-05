let fig = document.getElementsByTagName("figure")[0].innerHTML;
let randomNum = Math.floor(16 * Math.random());
/* let imageData = {
    file: " ",
    caption: " "
} */
let taskImages = [];
let allFigs = document.getElementsByTagName("img");
let figCap = document.getElementsByTagName("figcaption");
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

document.getElementById("images").innerHTML = " ";
for(let i = 0; i < randomNum; i++){
    document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
}

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

/*document.getElementById("searchButton").onclick = function(){
    let num = document.getElementById("searchInput").value;
    console.log(num);
    document.getElementById("images").innerHTML = " ";
    for(let i = 0; i < num; i++){
        document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
    }
}*/

/* document.getElementById("searchButton").onclick = clickHandler; 
function clickHandler(){
    let num = document.getElementById("searchInput").value;
    console.log(num);
    document.getElementById("images").innerHTML = " ";
    for(let i = 0; i < num; i++){
        document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
    }
} */

document.getElementById("searchButton").onclick = () => {
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
        /*let navList = document.getElementsByTagName("li");
        let navBar = document.getElementById("navList").innerHTML;
        console.log(navList);
        console.log(navBar);*/
        //navList.push(`<li><a href="#">${num}</a></li>`);
        //navBar += `    <li><a href="#">${num}</a></li>`;
        
    }

}