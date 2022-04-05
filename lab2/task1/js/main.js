let fig = document.getElementsByTagName("figure")[0].innerHTML;

/*document.getElementById("searchButton").onclick = function(){
    let num = document.getElementById("searchInput").value;
    console.log(num);
    document.getElementById("images").innerHTML = " ";
    for(let i = 0; i < num; i++){
        document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
    }
}*/
/*
document.getElementById("searchButton").onclick = clickHandler; 
function clickHandler(){
    let num = document.getElementById("searchInput").value;
    console.log(num);
    document.getElementById("images").innerHTML = " ";
    for(let i = 0; i < num; i++){
        document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
    }
}*/

document.getElementById("searchButton").onclick = () => {
    let num = document.getElementById("searchInput").value;
    console.log(num);
    document.getElementById("images").innerHTML = " ";
    for(let i = 0; i < num; i++){
        document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
    }
}