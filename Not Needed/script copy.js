function loadWindows() {
    document.body.insertAdjacentHTML("afterbegin", `<div id="mainContainer"></div>`);
    let mainWindow = document.getElementById(`mainContainer`);
    mainWindow.insertAdjacentHTML("afterbegin", `<h1>Jyll Ataru</h1>`);
    mainWindow.insertAdjacentHTML("beforeend", `<div id="contentOne"></div>`);

    setTimeout(function() {
        mainWindow.style.opacity = "1";;
    },200)

    let contentOne = document.getElementById("contentOne");
    contentOne.insertAdjacentHTML("afterbegin", `<h1>Title</h1>`);
    contentOne.insertAdjacentHTML("beforeend", 
    `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem vel beatae praesentium culpa distinctio, dolor, cumque corporis aut laboriosam voluptatum ratione accusamus provident, laborum qui placeat nemo voluptas consequuntur itaque!</p>`);

    setTimeout(function() {
        contentOne.style.opacity = "1";;
    },1200)
}

loadWindows();