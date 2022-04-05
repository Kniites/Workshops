document.getElementById('search-btn').onclick = clickHandler
let fig = document.getElementsByTagName('figure')[0].innerHTML;
let link = document.getElementById('categories').innerHTML;
thumbs = data_find()

function data_find() {
    let imgs = document.getElementsByTagName("img");
    let figcaptions = document.getElementsByTagName("figcaption");
    let thumbs = [];
    for (var i = 0; i < imgs.length; i++) {
        thumbs.push({'image': imgs[i].src, 'caption': figcaptions[i].innerHTML});
    }
    return thumbs;
}

onload = function randomPics() {
    document.getElementById('photos').innerHTML = ""
    randomNum = Math.floor(Math.random() * 15) + 1;
    for(let i = 0; i < randomNum; i++){
        document.getElementById('photos').innerHTML += `<figure class="photos" id="p1">${fig}</figure>`
    }
}

function clickHandler(){
    let inputValue = document.getElementById('search').value
    if(isNaN(inputValue)){
        if (checkThumbs(inputValue).length != 0) {
            thumbsInfo = checkThumbs(inputValue)
            document.getElementById('photos').innerHTML = "";
            for(let i = 0; i < thumbsInfo.length; i++){
                document.getElementById('photos').innerHTML += `<figure class="photos"><img src="${thumbsInfo[i].image}" alt="first" width=200px height=200px><figcaption align="center" >${thumbsInfo[i].caption}</figcaption></figure>`;
            }
        } else {
            document.getElementById('categories').innerHTML += `<a href="./">${inputValue}</a><br>`;
        }
    } else {
        document.getElementById('photos').innerHTML = "";
        for(let i = 0; i < inputValue; i++){
            document.getElementById('photos').innerHTML += `<figure class="photos" id="p1">${fig}</figure>`;
        }
    }
}

function checkThumbs(inputValue) {
    searchResult = []
    for(let i = 0; i < thumbs.length; i++){
        if ((thumbs[i].caption.toLowerCase()).includes(inputValue)){
            searchResult.push(thumbs[i]);
        }
    }
    return searchResult
}