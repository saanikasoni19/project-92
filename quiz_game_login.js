function addUser(){
    i1 = document.getElementById("i1").value;
    i2 = document.getElementById("i2").value;

    localStorage.setItem("i1", i1);
    localStorage.setItem("i2", i2);

    window.location="quiz_game_page.html";
   
}