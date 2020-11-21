var userSelection = cookies.get('seletion');

if(userSeletion == 'Red') {
    document.getElementById("selection-container").innerHTML = "<p> Red </p>";

} else if(userSelection == 'Blue') {
    document.getElementById("selection-container").innerHTML = "<p> Blue </p>";
}else if(userSelection == 'Green') {
    document.getElementById("selection-container").innerHTML = "<p> Green </p>";
}else {
    document.getElementById("selection-container").innerHTML = "<p> null </p>"
}