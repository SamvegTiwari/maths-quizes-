function adduser(){
     var player_1=document.getElementById("Player1").value;
     var player_2=document.getElementById("Player2").value; 
     localStorage.setItem("key1", player_1);
     localStorage.setItem("key2", player_2); 
     window.location="gamequiz_page.html";
    }
   