function adduser() 
{
    var player1_name = document.getElementById("Player1_input").value;
    var player2_name = document.getElementById("Player2_input").value;
    
    localStorage.setItem("player_1", player1_name);
    localStorage.setItem("player_2", player2_name);

    window.location = "quiz_game_page.html";
}