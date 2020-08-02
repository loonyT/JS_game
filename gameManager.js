let GameManager = {

    setGameStart: function (classType) {

        this.resetPlayer(classType);
        this.setPreFight();






    },
setGameStart()

    resetPlayer: function (classType) {


        switch (classType) {

            case "Warrior":

                player = new Player(classType, 200, 0, 200, 100, 50);
                break;

            case "Rogue":

                player = new Player(classType, 100, 0, 100, 150, 200);
                break;

            case "Mage":

                player = new Player(classType, 80, 50, 200, 100, 50);
                break;

            case "Hunter":

                player = new Player(classType, 200, 0, 50, 200, 100);
                break;

        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = ' <img src="https://image.shutterstock.com/image-photo/saint-petersburg-russia-august-1-260nw-307233971.jpg" ' + classType.toLowerCase() + '    "  class="img-avatar"> <div> <h3> ' + classType + '</h3><p class= "health-player"> health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strenght: ' + player.strenght + '</p> <p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';





    },

resetPlayer()
    setPreFight: function () {


        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy</p>';
        getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick = "GameManager.setFight"> Search for  enemy! </a>';
        getArena.style.visibility = "visible";
    },
setPreFight()
    setFight: function () {

        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Create enemy ! 
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2)); //choose a number between one and zero. 
        switch (chooseRandomEnemy) {

            case 0:
                enemy = enemy00;
                break;

            case 1:
                enemy = enemy01;
                break;

        }

        getHeader.innerHTML = '<p>Task : choose your move </p>';
        getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick = "PlayerMoves.calcAttack()"> Attack! </a>';
        getEnemy.innerHTML = '<img src="https://image.shutterstock.com/image-vector/rpg-videogame-characters-enemies-600w-1208517286.jpg' + enemy.enemyType.toLowerCase()+ ' " alt = "' + enemy.enemyType + ' " class = "img-avatar" > <div><h3>' + enemy.enemyType + '</h3><p class ="health-enemy">Health: ' + enemy.health + '</p><p>Mana : ' + enemy.mana + '</p><p>Strenght: ' + enemy.strenght + '</p><p>Agility: ' +enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p> </div>';
        
        
        


    },
setFight ()
}
