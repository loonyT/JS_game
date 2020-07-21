let GameManager = {

    setGameStart: function (classType) {

        this.resetPlayer(classType);
        this.setPreFight();






    },


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
getInterface.innerHTML =    ' <img src="https://image.shutterstock.com/image-photo/saint-petersburg-russia-august-1-260nw-307233971.jpg" '+ classType.toLowerCase()  + '    "  class="img-avatar"> <div> <h3> ' + classType   + '</h3>'     ;
        
        
        
        
        
    },


    setPreFight: function () {




    }




}
