let player;


function Player(classType, health, mana, strenght, agility, speed) {

    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strenght = strenght;
    this.agility = agility;                             
    this.speed = speed;

}

let PlayerMoves = {

    calcAttack: function () {

        //who attacks first? 

        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // player attacks ! 
        let playerAttack = function () {


            let calcBasedDamage;
            if (player.mana > 0) {


                calcBasedDamage = player.strength * player.mana / 1000; //calc dmg for a character



            } else {

                calcBasedDamage = player.strength * player.agility / 1000;


            }



            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBasedDamage + offsetDamage; //attackPowerOfCharacter
            // number of hits 
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;

            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues


        }

        // enemy attacks ! 
        let enemyAttack = function () {


            let calcBasedDamage;
            if (enemy.mana > 0) {


                calcBasedDamage = enemy.strength * enemy.mana / 1000; //calc dmg for a character



            } else {

                calcBasedDamage = enemy.strength * enemy.agility / 1000;


            }



            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBasedDamage + offsetDamage; //attackPowerOfCharacter
            // number of hits 
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;

            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues


        }
        // get player and enemy health to chan ge later ! 

        let getPlayerHealth = document.querySelector(".health - player");
        let getEnemyHealth = document.querySelector(".health - enemy");


        // initiate attacks ! 


        if (getPlayerSpeed >= getEnemySpeed) {


            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You Hit" + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {

                alert("You win !! refresh the browser to play again ");

                getPlayerHealth.innerHTML = 'Health :  0' + player.health;
                getEnemyHealth.innerHTML = 'Health :  0';


            } else {

                getEnemyHealth.innerHTML = 'Health :  0' + enemy.health;
                // enemy atacks 


                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy Hit" + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {

                    alert("You loose !! refresh the browser to play again ");

                    getPlayerHealth.innerHTML = 'Health :  0';
                    getEnemyHealth.innerHTML = 'Health :  0' + enemy.health;


                } else {


                    getPlayerHealth.innerHTML = 'Health :  0' + player.health;



                }



            }


        } else if (getEnemySpeed >= getPlayerSpeed) {


            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy Hit" + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {

                alert("You loose !! refresh the browser to play again ");

                getEnemyHealth.innerHTML = 'Health :  0' + enemy.health;
                getPlayerHealth.innerHTML = 'Health :  0';


            } else {

                getPlayerHealth.innerHTML = 'Health :  0' + player.health;
                // player atacks 


                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("you Hit" + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {

                    alert("You win !! refresh the browser to play again ");

                    getEnemyHealth.innerHTML = 'Health :  0';
                    getPlayerHealth.innerHTML = 'Health :  0' + player.health;


                } else {


                    getEnemyHealth.innerHTML = 'Health :  0' + enemy.health;



                }



            }


        }
    }






}
