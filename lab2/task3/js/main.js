let fig = document.getElementsByTagName("figure")[0].innerHTML;
let randomNum = Math.floor(16 * Math.random());
document.getElementById("images").innerHTML = " ";
for(let i = 0; i < randomNum; i++){
    document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
}

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
    if (isNaN(num) === false){
        console.log(num);
        document.getElementById("images").innerHTML = " ";
        for(let i = 0; i < num; i++){
            document.getElementById("images").innerHTML += `<figure>${fig}</figure>`;
        }
    }
    if (isNaN(num) === true){
        console.log(num);
        /*let navList = document.getElementsByTagName("li");
        let navBar = document.getElementById("navList").innerHTML;
        console.log(navList);
        console.log(navBar);*/
        //navList.push(`<li><a href="#">${num}</a></li>`);
        //navBar += `    <li><a href="#">${num}</a></li>`;
        document.getElementById("navList").innerHTML += `<li><a href="#">${num}</a></li>`;
    }

}